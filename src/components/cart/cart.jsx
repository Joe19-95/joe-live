import React from 'react'
import {ReactComponent as CartLogo}  from '../../assets/cart.svg'
import './cart.scss'
import {cartToggle} from '../../redux/cart/cart.action'
import {connect} from 'react-redux'
import {itemCountSelector} from '../../redux/cart/cart.selectors'

const Cart =({cartToggle,num})=>{

return(
    <div className="cart-icon" >
        <CartLogo className='shopping-icon'  onClick={cartToggle} />
        <span className='item-count' >{num}</span>
    </div>
)
}

const mapDispatchToProps=(dispatch)=>({
    cartToggle:()=>{dispatch(cartToggle())}
})
const mapStateToProps=(state)=>({
    num:itemCountSelector(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart)