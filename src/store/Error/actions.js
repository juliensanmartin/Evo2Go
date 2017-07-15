import { PROPAGATE_ERROR, RESET_ERROR } from './actions.type'

export const propagateError = (message) => dispatch => {
  return dispatch({
    type: PROPAGATE_ERROR,
    message
  })
}

export const resetError = () => dispatch => {
  return dispatch({
    type: RESET_ERROR,
    message: ''
  })
}
