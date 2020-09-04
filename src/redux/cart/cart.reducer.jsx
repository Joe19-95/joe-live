import cartType from './cart.types'
import {cartItemAr,remove} from './cart.utils'

const INITIAL_STATE={
    hidden:true,
    cartItem:[]
}

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case cartType.CART_TOGGLE:
            return{
                ...state,
                hidden:!(state.hidden)
            }
         case cartType.ADD_ITEM:
            return{
                ...state,
                cartItem:cartItemAr(state.cartItem,action.payload)
            }
         case cartType.REMOV    :
            return{
                ...state,
                cartItem:state.cartItem.filter((item)=>{
                        return(item.id!==action.payload.id)
                })
            }
        case cartType.REMOVITEM:
            return{
                ...state,
                cartItem:remove(state.cartItem,action.payload)
            }
        default:
            return state
    }
}
export default cartReducer