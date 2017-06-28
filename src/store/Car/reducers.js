import {
  SET_EVO_VISIBILITY,
  SET_CAR2GO_VISIBILITY,
  SET_BUS_VISIBILITY,
  GET_VISIBLE_CARS,
  CARS_LOADED
 } from './actions.type'
import { combineReducers } from 'redux'
import { unionBy } from 'lodash'

const visibleCars = (state = [], action) => {
  switch (action.type) {
    case GET_VISIBLE_CARS:
      return unionBy(action.vehicles, state, 'id')
    default:
      return state
  }
}

const carLoaded = (state = false, action) => {
  switch (action.type) {
    case CARS_LOADED:
      return action.loaded
    default:
      return state
  }
}

const car2go = (state = {visible:true}, action) => {
  switch (action.type) {
    case SET_CAR2GO_VISIBILITY:
      return {
        visible: action.visible
      }
    default:
      return state
  }
}

const evo = (state = {visible:true}, action) => {
  switch (action.type) {
    case SET_EVO_VISIBILITY:
      return {
        visible: action.visible
      }
    default:
      return state
  }
}

const translink = (state = {visible:false}, action) => {
  switch (action.type) {
    case SET_BUS_VISIBILITY:
      return {
        visible: action.visible
      }
    default:
      return state
  }
}

export default car = combineReducers({
	car2go, evo, translink, visibleCars, carLoaded
})
