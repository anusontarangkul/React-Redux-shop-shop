import { ADD_TO_CART, ADD_MULTIPLE_TO_CART, CLEAR_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from './cartTypes'

const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return
        case ADD_MULTIPLE_TO_CART:
            return
        case CLEAR_CART:
            return
        case UPDATE_CART_QUANTITY:
            return
        case REMOVE_FROM_CART:
            return
        default:
            return state;
    }
}

export default cartReducer;