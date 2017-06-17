import {
  GET_CURRENT_DISTANCE,
  GET_CURRENT_DIRECTION
 } from './actions.type'
import Polyline from '@mapbox/polyline'
import { getTimeAndDistance, getDirection } from '../google-map.api'

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

export const fetchDirection = (origin, destination) => dispatch =>
  getDirection(origin, destination)
    .then(response => {
        let points = Polyline.decode(response.routes[0].overview_polyline.points)
        let coords = points.map((point, index) => (
          {
            latitude : point[0],
            longitude : point[1]
          }
        ))
        return dispatch({
          type: GET_CURRENT_DIRECTION,
          coords
        })
      },
      errors => console.error(errors)
    )
