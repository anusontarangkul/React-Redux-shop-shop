import { UPDATE_PRODUCTS } from './productTypes';

const productsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return;
        default:
            return state;
    }
}

export default productsReducer;