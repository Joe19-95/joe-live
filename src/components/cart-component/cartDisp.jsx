import React from 'react'
import './cartStyle.scss'

export const CartDisp=({item:{price,name,quantity,imageUrl}})=>{
    return(
        <div className="cart-item" >
            <img src={imageUrl} alt='item' />
            <div className="item-details" >
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    )
}