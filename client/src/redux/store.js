import { createStore, applyMiddleware } from 'redux';

// import rootReducer from './rootReducer';
import reducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;