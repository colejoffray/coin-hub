import { useState, useEffect } from 'react';

import './App.css';
import Coin from './components/Coin';

function App() {

  const [search, setSearch] = useState('')

  const [coins, setCoin] = useState([])

  useEffect(() => {
    const getCoins = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-Ldrc1VnFEpM8L3Rpdr1CMhQB')
        const data = await res.json()
        setCoin([...data])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getCoins()
  }, []); // Empty dependency array to run only once on component mount

  const searchValChange = (e) => {
    setSearch(e.target.value)
  }
  
  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
            <div className='col-lg-4 col-md-6 mx-auto my-4'>
              <h1 className='fw-bold '>Coin Hub</h1>
              <p className='lead my-4'>A lite, simple, crypto data center</p>
              <p>Powered by: <span><a href='https://www.coingecko.com/' className='text-decoration-none'>CryptoGecko</a></span></p>
            </div>
        </div>


        <div className='row'>
          <div className='col-md-8 mx-auto my-5'>
            <form>
              <input className='form-control form-control-lg' type='text' placeholder='Search Coin' onChange={searchValChange}/>
            </form>
          </div>
       </div>

       {filteredCoins.map((coin) => 
            (
              <Coin 
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              />
            )
       )}

      </div>
        
    </div>
  );
}

export default App;
