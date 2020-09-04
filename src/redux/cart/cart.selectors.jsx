import {createSelector} from 'reselect';
const cartSelector =(state)=>{return (state.cart)}
export const cartItemSelector=createSelector([cartSelector],(cart)=>{return (cart.cartItem)})
export const hiddenSelector=createSelector([cartSelector],(cart)=>{return (cart.hidden)})
export const itemCountSelector=createSelector([cartItemSelector],
    (cartItem)=>cartItem.reduce((need,cartItem)=>{return(need+cartItem.quantity)},0)
    )
export const itemPriceSelector=createSelector([cartItemSelector],
    (cartItem)=>cartItem.reduce((need,cartItem)=>{return(need+(cartItem.quantity*cartItem.price))},0)
    )