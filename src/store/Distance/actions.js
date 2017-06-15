import {
  GET_CURRENT_DISTANCE
 } from './actions.type'
import { getTimeAndDistance } from '../google-map.api'

// this is a thunk (redux-thunk)
export const fetchDistance = (origin, destination) => dispatch =>
  getTimeAndDistance(origin, destination)
    .then({distance, duration}} => {
        return dispatch({
          type: GET_CURRENT_DISTANCE,
          distance: {
            distance: distance.text,
            duration: disatance.text
          }
        })
      }
      errors => console.error(errors)
    )
