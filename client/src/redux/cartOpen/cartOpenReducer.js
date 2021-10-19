import { TOGGLE_CART } from './cartOpenTypes';

const intitialState = {
    cartOpen: false
}

const cartOpenReducer = (state = intitialState, action) => {
    switch (action.type) {
        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            }
        default:
            return state;
    }
}

export default cartOpenReducer;