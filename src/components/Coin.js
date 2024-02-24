import React from 'react'

const Coin = ({ name, image, symbol, marketcap, price, priceChange }) => {
  return (
    <div className='container my-4'>
        <div className='row border-bottom border-info align-items-center'>
            <div className='col'>
                <div className='d-flex align-items-center gap-3'>
                    <div className='text-center' style={{width: '30px', height: '30px', marginBottom: '1rem'}}>
                        <img src={image} alt={name} className='img-fluid'/>
                    </div>
                    <p className='lead'>{name}</p>
                </div> 
            </div>

            <div className='col'>
                <p className='text-center'>{symbol}</p> {/* Align center text */}
            </div>

            <div className='col'>
                <p className='text-center'>${price.toFixed(2)}</p> {/* Align center text */}
            </div>

            <div className='col'>
                <p className={priceChange > 0 ? 'text-success text-center' : 'text-danger text-center'}>{priceChange.toFixed(2)} %</p> {/* Align center text */}
            </div>

            <div className='col'>
                <div className='text-center'> {/* Align center text */}
                    <p>Market Cap:</p>
                    <p>Rs. {marketcap}</p>
                </div>
            </div>
        </div>
    </div>
    

  )
}

export default Coin
