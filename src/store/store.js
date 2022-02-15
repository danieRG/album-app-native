import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { albumReducer } from '../reducers/albumReducer';
import thunk from 'redux-thunk';

const enhancers = compose(applyMiddleware(thunk));

export const store = createStore(
    albumReducer,
    enhancers
);