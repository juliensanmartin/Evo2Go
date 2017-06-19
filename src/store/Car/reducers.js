import {
  GET_CAR2GO_CARS,
  GET_EVO_CARS,
  SET_EVO_VISIBILITY,
  SET_CAR2GO_VISIBILITY,
  GET_BUS,
  SET_BUS_VISIBILITY
 } from './actions.type'
import { combineReducers } from 'redux'

const initialState = {
  vehicles: {},
  visible: true
};

const car2go = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR2GO_CARS:
      return {
        ...state,
        vehicles: action.vehicles
      }
    case SET_CAR2GO_VISIBILITY:
      return {
        ...state,
        visible: action.visible
      }
    default:
      return state
  }
}

const evo = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVO_CARS:
      return {
        ...state,
        vehicles: action.vehicles
      }
      case SET_EVO_VISIBILITY:
        return {
          ...state,
          visible: action.visible
        }
    default:
      return state
  }
}

const translink = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUS:
      return {
        ...state,
        vehicles: action.vehicles
      }
      case SET_BUS_VISIBILITY:
        return {
          ...state,
          visible: action.visible
        }
    default:
      return state
  }
}

export default car = combineReducers({
	car2go, evo, translink
})
