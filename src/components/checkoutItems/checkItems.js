import React from 'react'
import './checkItems.scss'
import {addItem,removeItem,removeOneItem} from '../../redux/cart/cart.action'
import {connect} from 'react-redux'
const ChItem =({cartItem,dele,ader,deler})=>{
    const {name,imageUrl,quantity,price}=cartItem
    return(
        <div className="checkout-item" >
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className="quantity" >
                <div onClick={()=>deler(cartItem)} className="arrow" >&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={()=>ader(cartItem)} className="arrow" >&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span  onClick={()=>{dele(cartItem)}} className='remove-button'>&#10005;</span>
            
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>({
    dele:(item)=>{dispatch(removeItem(item))},
    ader:(item)=>{dispatch(addItem(item))},
    deler:(item)=>{dispatch(removeOneItem(item))}
})
 
export default connect(null,mapDispatchToProps)(ChItem)