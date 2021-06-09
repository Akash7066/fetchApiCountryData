// Data hoga

import { createStore, combineReducers, applyMiddleware } from 'redux';
import countryReducer from './Reducers/userDataReducer';

// dev Saga
import createSagaMiddelware from 'redux-saga';
import rootSaga from '../rootSaga';

const sagaMiddelware = createSagaMiddelware();

//
const rootReducer = combineReducers({
	//
	country: countryReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddelware));
sagaMiddelware.run(rootSaga);

export default store;
