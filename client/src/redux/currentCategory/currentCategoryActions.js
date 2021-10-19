import { UPDATE_CURRENT_CATEGORY } from './currentCategoryTypes'

export const updateCurrentCategory = currentCategory => {
    return {
        type: UPDATE_CURRENT_CATEGORY,
        payload: currentCategory
    }
}