import { ADD_TO_CART, ADD_MULTIPLE_TO_CART, CLEAR_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from './cartTypes'

export const addToCart = () => {
    return {
        type: ADD_TO_CART
    }
}

export const addToMultipleCart = () => {
    return {
        type: ADD_MULTIPLE_TO_CART
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const updateCart = () => {
    return {
        type: UPDATE_CART_QUANTITY
    }
}

export const removeFromCart = () => {
    return {
        type: REMOVE_FROM_CART
    }
}