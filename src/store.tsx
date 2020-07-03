import thunk from 'redux-thunk';
import reducer from './redux/reducers';
import promise from 'redux-promise-middleware';
import { applyMiddleware, createStore } from 'redux';

const middleware = applyMiddleware(promise, thunk);

export default createStore(reducer, middleware);
