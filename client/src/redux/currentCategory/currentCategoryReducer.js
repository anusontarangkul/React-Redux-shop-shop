import { UPDATE_CURRENT_CATEGORY } from './currentCategoryTypes'

const initialState = {
    currentCategory: ''
}

const currentCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload
            }
        default:
            return state;
    }
}

export default currentCategoryReducer;