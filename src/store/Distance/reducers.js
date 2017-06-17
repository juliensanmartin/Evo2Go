import {
  GET_CURRENT_DISTANCE,
  GET_CURRENT_DIRECTION
 } from './actions.type'
 import { combineReducers } from 'redux'

const distance = (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_DISTANCE:
      return action.distance
    default:
      return state
  }
}

const direction = (state = [], action) => {
  switch (action.type) {
    case GET_CURRENT_DIRECTION:
      return action.coords
    default:
      return state
  }
}

export default distance = combineReducers({
	distance, direction
})
