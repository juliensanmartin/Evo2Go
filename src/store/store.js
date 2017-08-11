import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import devTools from 'remote-redux-devtools'
import car from './Car/reducers'
import distance from './Distance/reducers'
import errors from './Error/reducers'

const appReducer = combineReducers({
	car, distance, errors
})

const enhancer = compose(
	applyMiddleware(
		thunk,
		createLogger({
        level: 'info',
        collapsed: true
    })
	),
	devTools(),
	autoRehydrate()
)

const store = createStore(appReducer, enhancer)
persistStore(store, {storage: AsyncStorage})

export default store
