import { ADD_TO_CART, ADD_MULTIPLE_TO_CART, CLEAR_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from './cartTypes'

export const addToCart = product => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const addToMultipleCart = products => {
    return {
        type: ADD_MULTIPLE_TO_CART,
        payload: products
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

export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}