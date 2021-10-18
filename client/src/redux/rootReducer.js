import { combineReducers } from 'redux'
import cartReducer from './cart/cartReducer';
import cartOpenReducer from './cartOpen/cartOpenReducer';
import categoriesReducer from './categories/categoriesReducer';
import currentCategoryReducer from './currentCategory/currentCategoryReducer';
import productsReducer from './products/productsReducer';


const rootReducer = combineReducers({
    cart: cartReducer,
    cartOpen: cartOpenReducer,
    categories: categoriesReducer,
    currentCategory: currentCategoryReducer,
    products: productsReducer
})

export default rootReducer