import { TOGGLE_CART } from './cartOpenTypes';

const intitialState = false;

const cartOpenReducer = (state = intitialState, action) => {
    switch (action.type) {
        case TOGGLE_CART:
            return
        default:
            return state;
    }
}

export default cartOpenReducer;