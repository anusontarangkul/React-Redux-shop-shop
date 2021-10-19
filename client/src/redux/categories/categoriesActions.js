import { UPDATE_CATEGORIES } from './categoriesTypes'

export const updateCategories = categories => {
    return {
        type: UPDATE_CATEGORIES,
        payload: categories
    }
}