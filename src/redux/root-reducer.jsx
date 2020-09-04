import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/direct.reducer'
import sopReducer from './shop/shop.reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const config={
    key:'root',
    storage,
    whiteList:['cart']
}

const rootReducer= combineReducers(
    {user:userReducer,
    cart:cartReducer,
    direct:directoryReducer,
    shop:sopReducer}
    );

export default persistReducer(config,rootReducer)