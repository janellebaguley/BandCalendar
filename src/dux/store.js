import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer, {eventScheduler} from './eventScheduler';

const rootReducer = combineReducers({ reducer: eventScheduler
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));