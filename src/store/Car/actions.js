import {
  GET_CAR2GO_CARS,
  GET_EVO_CARS,
  SET_EVO_VISIBILITY,
  SET_CAR2GO_VISIBILITY,
  GET_BUS,
  SET_BUS_VISIBILITY
 } from './actions.type'
import { getAvailableVehicleCar2Go } from '../car2go.api'
import { getAvailableVehicleEvo } from '../evo.api'
import { getAvailableBus } from '../translink.api'
import { car2goVehicleNormalizer, evoVehicleNormalizer, busNormalizer } from './schema'

export const fetchVisibleCars = () => (dispatch, getState) => {
  const state = getState()
  const car2GoVisible = state.car.car2go.visible
  const evoVisible = state.car.evo.visible
  const busVisible = state.car.translink.visible

  if (car2GoVisible) dispatch(fetchCar2GoCars())
  if (evoVisible) dispatch(fetchEvoCars())
  if (busVisible) dispatch(fetchBus())
}

// this is a thunk (redux-thunk)
export const fetchCar2GoCars = () => (dispatch, getState) => getAvailableVehicleCar2Go()
  .then(placemarks => {
      // placemarks => [objects]
      // Normalized to entities => {objects} and result => [keys]
      normalized= car2goVehicleNormalizer(placemarks)
      console.log('CAR2GO NORMALIZED', normalized)

      return dispatch({
        type: GET_CAR2GO_CARS,
        vehicles: normalized.entities.vehicles
      })
    },
    errors => console.error(errors)
  )

export const setCar2GoVisibility = (visible) => (dispatch) => {
  //dispatch(fetchCar2GoCars())
  return {
    type: SET_CAR2GO_VISIBILITY,
    visible
  }
}

export const fetchEvoCars = () => (dispatch, getState) => getAvailableVehicleEvo()
  .then(data => {
    normalized = evoVehicleNormalizer(data)
    console.log('EVO NORMALIZED', normalized)

      return dispatch({
        type: GET_EVO_CARS,
        vehicles: normalized.entities.vehicles
      })
    },
    errors => console.error(errors)
  )

export const setEvoVisibility = (visible) => (dispatch) => {
  //dispatch(fetchEvoCars())
  return {
    type: SET_EVO_VISIBILITY,
    visible
  }
}

export const fetchBus = () => dispatch => getAvailableBus()
  .then(response => {
      const normalized = busNormalizer(response)
      console.log('BUS NORMALIZED', normalized)

      return dispatch({
        type: GET_BUS,
        vehicles: normalized.entities.bus
      })
    },
    errors => console.error(errors)
  )

export const setBusVisibility = visible => dispatch => {
  //dispatch(fetchBus())
  return {
    type: SET_BUS_VISIBILITY,
    visible
  }
}
