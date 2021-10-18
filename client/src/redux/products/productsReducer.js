import { UPDATE_PRODUCTS } from './productTypes';

const intialState = []

const productsReducer = (state = intialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return;
        default:
            return state;
    }
}

export default productsReducer;