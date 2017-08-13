import { AsyncStorage } from 'react-native'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import devTools from 'remote-redux-devtools'
import car from './Car/reducers'
import distance from './Distance/reducers'
import errors from './Error/reducers'
import { createFilter } from 'redux-persist-transform-filter'
import createActionBuffer from 'redux-action-buffer'
import {REHYDRATE} from 'redux-persist/constants'

const appReducer = combineReducers({
	car, distance, errors
})

const persitingReducers = createFilter('car', ['car2go', 'evo', 'modo', 'translink', 'mobi'])

const enhancer = compose(
	applyMiddleware(
		thunk,
		createLogger({
        level: 'info',
        collapsed: true
    }),
		createActionBuffer(REHYDRATE)
	),
	autoRehydrate(),
	//devTools()
)

const store = createStore(appReducer, enhancer)
persistStore(store, {storage: AsyncStorage, transforms: [
        persitingReducers
    ]}, () => {
  console.log('rehydration complete')
})

export default store
