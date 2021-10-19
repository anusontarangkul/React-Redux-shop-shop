import { UPDATE_PRODUCTS } from './productTypes';

const intialState = {
    products: []
}

const productsReducer = (state = intialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.payload]
            }
        default:
            return state;
    }
}

export default productsReducer;