import { TOGGLE_CART } from './cartOpenTypes';

const cartOpenReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_CART:
            return
        default:
            return state;
    }
}

export default cartOpenReducer;