import {
  GET_CURRENT_DISTANCE
 } from './actions.type'

const distance = (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_DISTANCE:
      return {
        ...state,
        distance: action.distance
      }
    default:
      return state
  }
}
