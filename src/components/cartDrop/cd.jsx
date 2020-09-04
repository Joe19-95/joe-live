import React from 'react'
import './cd.scss'
import CusButton from '../../components/button/button.component'
import {connect } from 'react-redux'
import {cartItemSelector } from '../../redux/cart/cart.selectors'
import {cartToggle} from '../../redux/cart/cart.action'
import {CartDisp} from '../cart-component/cartDisp'
import {Link} from 'react-router-dom'
const CardDrop=({cartItem,toggle})=>{
    return(
        <div className='cart-dropdown' >
            <div className='cart-items' >
            {cartItem.length?
            (cartItem.map((item)=>{
                return(<CartDisp  key={item.id} item={item}/>)
            })):(<span className="cartEmpty">You Cart is Empty</span>)}
            </div>
            <Link to='/checkout' ><CusButton onClick={toggle} >Go to Checkout </CusButton></Link>
        </div>
    )
}

const mapStateToProps=(state)=>({
    cartItem:cartItemSelector(state)
})

const mapDispatchToProps=(dispatch)=>({
    toggle:()=>{dispatch(cartToggle())}
})
 
export default connect(mapStateToProps,mapDispatchToProps)(CardDrop)