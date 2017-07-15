import { PROPAGATE_ERROR, RESET_ERROR } from './actions.type'
import { combineReducers } from 'redux'

const errorApi = (state = '', action) => {
  switch (action.type) {
    case PROPAGATE_ERROR:
      return action.message
    case RESET_ERROR:
      return action.message
    default:
      return state
  }
}

export default errors = combineReducers({
	errorApi
})
