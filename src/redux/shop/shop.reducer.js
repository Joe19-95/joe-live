import SHOP_DATA from './shop.data'
const INITIAL_STATE={
    item:SHOP_DATA
}

const sopReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        default: 
        return state;
    }
}
export default sopReducer