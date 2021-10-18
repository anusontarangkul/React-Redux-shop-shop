import { UPDATE_CURRENT_CATEGORY } from './currentCategoryTypes'

const initialState = '';

const currentCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_CATEGORY:
            return
        default:
            return state;
    }
}

export default currentCategoryReducer;