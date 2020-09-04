import React from 'react'
import './checkout.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {cartItemSelector,itemPriceSelector} from '../../redux/cart/cart.selectors'
import ChItem from '../../components/checkoutItems/checkItems'
import Stripe from '../../components/stripe/stripe.component'

 const Checkout=({i,p})=>{
    return(
        <div className="checkout-page" >
            <div className="checkout-header" >
                <div className="header-block" >
                    <span>Product</span>
                </div>
                <div className="header-block" >
                    <span>Descsription</span>
                </div>
                <div className="header-block" >
                    <span>Quantity</span>
                </div>
                <div className="header-block" >
                    <span>Price</span>
                </div>
                <div className="header-block" >
                    <span>Remove</span>
                </div>
                
            </div>
            {
                    i.map((item)=>{
                        return(
                            <ChItem cartItem={item} key={item.id} ></ChItem>
                        )
                    })
                }
            <div className='total'>TOTOAL:${p} </div>
            <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <Stripe Price={p} />
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    i:cartItemSelector,
    p:itemPriceSelector
})

export default  connect(mapStateToProps)(Checkout)

