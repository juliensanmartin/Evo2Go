import {
  GET_CURRENT_DISTANCE
 } from './actions.type'
import { getTimeAndDistance } from '../google-map.api'

export const fetchDistance = (origin, destination) => dispatch =>
  getTimeAndDistance(origin, destination)
    .then(({rows}) => {
        const distance = rows[0].elements[0].distance.text
        const duration = rows[0].elements[0].duration.text
        return dispatch({
          type: GET_CURRENT_DISTANCE,
          distance: {
            distance,
            duration
          }
        })
      },
      errors => console.error(errors)
    )
