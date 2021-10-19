import { ADD_TO_CART, ADD_MULTIPLE_TO_CART, CLEAR_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from './cartTypes'

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        case UPDATE_CART_QUANTITY:
            return
        case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => {
                return product._id !== action.payload
            })
        default:
            return state;
    }
}

export default cartReducer;