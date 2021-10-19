import { UPDATE_PRODUCTS } from './productTypes';

export const updateProduct = products => {
    return {
        type: UPDATE_PRODUCTS,
        payload: products
    }
}