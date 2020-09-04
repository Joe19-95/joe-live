import React from 'react'
import './collect.component.scss';
import CusButton from '../../components/button/button.component'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'

const Collect=({item,addItem})=>{
    const {name,price,imageUrl}=item
return(
    <div className='collection-item' >
    <div className='image' style={{ 
        backgroundImage:`url(${imageUrl})`
    }} />
    <div className='collection-footer' >
    <span className='name' >{name}</span>
    <span className='price' >{price}</span>
    <CusButton onClick={()=>addItem(item)} inverted >Add to Cart</CusButton>

    </div>
    </div>
)
}
const mapDispatchToProps=(dispatch)=>({
    addItem:(item)=>{dispatch(addItem(item))}
})

export default connect(null,mapDispatchToProps)(Collect)