import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

function configureStore(initialState) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
	return composeEnhancers(createStore(rootReducer, initialState, 
	//applyMiddleware(reduxImmutableStateInvariant())
	applyMiddleware()
	));
}

export default configureStore;
