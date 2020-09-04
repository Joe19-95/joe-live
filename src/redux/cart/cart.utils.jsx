export const cartItemAr=(cartItems,newCartItems)=>{
    const ar=cartItems.find((item)=>{
        return(item.id===newCartItems.id)
    })
    if(ar){
    return (cartItems.map((item)=>
        item.id===newCartItems.id?{...item,quantity:item.quantity+1}:item))
    }
    return [...cartItems,{...newCartItems,quantity:1}]
}

export const remove=(cartItem,itemToDel)=>{
    const ar=cartItem.find((item)=>{
        return(item.id===itemToDel.id)
    })
    if(ar.quantity===1){
        return(cartItem.filter((item)=>
        item.id!==itemToDel.id
    )
)
        }
        return(cartItem.map((item)=>
        item.id===itemToDel.id?{...item,quantity:item.quantity-1}:item
    ))
}