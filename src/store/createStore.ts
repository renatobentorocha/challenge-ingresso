import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer, { RootState } from './modules/combineReducers';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware<RootState>();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
