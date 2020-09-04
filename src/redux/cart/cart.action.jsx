import cartType from './cart.types'

export const cartToggle=()=>({
    type:cartType.CART_TOGGLE
});

export const addItem=(item)=>({
    type:cartType.ADD_ITEM,
    payload:item
});

export const removeItem=(item)=>({
    type:cartType.REMOV,
    payload:item
});

export const removeOneItem=(item)=>({
    type:cartType.REMOVITEM,
    payload:item
});