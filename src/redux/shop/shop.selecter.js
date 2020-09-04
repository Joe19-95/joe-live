import {createSelector} from 'reselect'

const shopSelecter=(state)=>{return state.shop}

export const itemSel=createSelector([shopSelecter],(t)=>{
    return t.item})

        export const itsel=createSelector(
        [itemSel],
        item=>{ return Object.keys(item).map((k)=>{
        console.log("aaaaaaaaaaaaaaaaaaaaaaa")
        console.log(item[k])
        return item[k]})})


export const idsel=(para)=>createSelector([itemSel],(item)=>{return item[para]})
