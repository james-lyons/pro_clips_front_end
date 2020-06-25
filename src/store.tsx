import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './redux/reducers';
import promise from 'redux-promise-middleware';
import { applyMiddleware, createStore } from 'redux';

const middleware = applyMiddleware(promise, thunk, logger);

export default createStore(reducer, middleware);
