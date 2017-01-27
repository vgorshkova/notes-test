import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer,
    composeWithDevTools(middleware)); //, middleware