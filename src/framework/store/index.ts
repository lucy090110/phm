import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import navMenuReducer from '../navMenu/reducer/index';

const store = createStore(combineReducers({ navMenuReducer }), applyMiddleware(logger));
export default store;
