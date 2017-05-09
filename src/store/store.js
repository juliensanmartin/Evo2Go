import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import car from './Car/reducers';

const appReducer = combineReducers({
	car,
});

const enhancer = compose(
	applyMiddleware(
		thunk,
		createLogger({
        level: 'info',
        collapsed: true
    })
	),
	devTools()
);

const store = createStore(appReducer, enhancer);

export default store;
