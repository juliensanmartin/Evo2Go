import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import car from './Car/reducers';

const appReducer = combineReducers({
	car,
});

const enhancer = compose(
	applyMiddleware(
		thunk,
	),
	devTools()
);

const store = createStore(appReducer, enhancer);

export default store;
