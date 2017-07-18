import {
  SET_EVO_VISIBILITY,
  SET_CAR2GO_VISIBILITY,
  SET_BUS_VISIBILITY,
  SET_MOBI_VISIBILITY,
  GET_VISIBLE_CARS,
  CARS_LOADED,
  ON_REGION_CHANGE
 } from './actions.type'
import { PROPAGATE_ERROR, RESET_ERROR } from '../Error/actions.type'
import { getAvailableVehicleCar2Go } from '../car2go.api'
import { getAvailableVehicleEvo } from '../evo.api'
import { getAvailableBus } from '../translink.api'
import { getAvailableMobi } from '../mobi.api'
import { getModoCars } from '../modo.api'
import { car2goVehicleNormalizer, evoVehicleNormalizer, busNormalizer, mobiNormalizer, modoVehicleNormalizer } from './schema'
import { reduce, chunk, each, split, toNumber } from 'lodash'

export const fetchVisibleCars = () => (dispatch, getState) => {
  dispatch({
    type: RESET_ERROR,
    message: ''
  })
  const state = getState()
  const car2GoVisible = state.car.car2go.visible
  const evoVisible = state.car.evo.visible
  const busVisible = state.car.translink.visible
  const mobiVisible = state.car.mobi.visible

  const promises = []

  if (car2GoVisible) promises.push(dispatch(fetchCar2GoCars()))
  if (evoVisible) promises.push(dispatch(fetchEvoCars()))
  if (busVisible) promises.push(dispatch(fetchBus()))
  if (mobiVisible) promises.push(dispatch(fetchMobi()))
  promises.push(dispatch(fetchModoCars()))

  Promise.all(promises)
    .then(() => {
      return dispatch({
        type: CARS_LOADED,
        loaded: true
      })
    })
}

// this is a thunk (redux-thunk)
export const fetchCar2GoCars = () => (dispatch, getState) => getAvailableVehicleCar2Go()
  .then(placemarks => {
    // placemarks => [objects]
    // Normalized to entities => {objects} and result => [keys]
    normalized= car2goVehicleNormalizer(placemarks)
    console.log('CAR2GO NORMALIZED', normalized)

    const vehicles = reduce(normalized.entities.vehicles, (result, value, key) => {
      result.push({
        id: key,
        latlng: {
          latitude: value.coordinates[1],
          longitude: value.coordinates[0]
        },
        type: 'car2GoPin',
        address: value.address,
        fuel: value.fuel,
        name: value.name
      })
      return result
    }, [])

    dispatch({
      type: GET_VISIBLE_CARS,
      vehicles
    })
  },
  errors => {
    dispatch({
      type: PROPAGATE_ERROR,
      message: errors.message
    })
  }
)

export const setCar2GoVisibility = (visible) => (dispatch) => {
  if (visible) {
    dispatch({
      type: CARS_LOADED,
      loaded: false
    })
    dispatch(fetchCar2GoCars())
      .then(() => {
        return dispatch({
          type: CARS_LOADED,
          loaded: true
        })
      })
  }

  return dispatch({
    type: SET_CAR2GO_VISIBILITY,
    visible
  })
}

export const fetchEvoCars = () => (dispatch, getState) => getAvailableVehicleEvo()
  .then(data => {
    normalized = evoVehicleNormalizer(data)
    console.log('EVO NORMALIZED', normalized)

    const vehicles = reduce(normalized.entities.vehicles, (result, value, key) => {
      result.push({
        id: key,
        latlng: {
          latitude: value.Lat,
          longitude: value.Lon,
        },
        type: 'evoPin',
        address: value.Address,
        fuel: value.Fuel,
        name: value.Name
      })
      return result
    }, [])

    dispatch({
      type: GET_VISIBLE_CARS,
      vehicles
    })
  },
  errors => {
    dispatch({
      type: PROPAGATE_ERROR,
      message: errors.message
    })
  }
)

export const setEvoVisibility = (visible) => (dispatch) => {
  if (visible) {
    dispatch({
      type: CARS_LOADED,
      loaded: false
    })
    dispatch(fetchEvoCars())
      .then(() => {
        return dispatch({
          type: CARS_LOADED,
          loaded: true
        })
      })
  }
  return dispatch({
    type: SET_EVO_VISIBILITY,
    visible
  })
}

export const fetchBus = () => dispatch => getAvailableBus()
  .then(response => {
      const normalized = busNormalizer(response)
      console.log('BUS NORMALIZED', normalized)

      const vehicles = reduce(normalized.entities.bus, (result, value, key) => {
        result.push({
          id: key,
          latlng: {
            latitude: value.Latitude,
            longitude: value.Longitude
          },
          type: 'busPin',
          address: value.Destination,
          fuel: null,
          name: value.RouteNo,
          direction: value.Direction
        })
        return result
      }, [])

      dispatch({
        type: GET_VISIBLE_CARS,
        vehicles
      })
    },
    errors => {
      dispatch({
        type: PROPAGATE_ERROR,
        message: errors.message
      })
    }
  )

export const setBusVisibility = visible => dispatch => {
  if (visible) {
    dispatch({
      type: CARS_LOADED,
      loaded: false
    })
    dispatch(fetchBus())
      .then(() => {
        return dispatch({
          type: CARS_LOADED,
          loaded: true
        })
      })
  }
  return dispatch({
    type: SET_BUS_VISIBILITY,
    visible
  })
}

export const fetchMobi = () => dispatch => getAvailableMobi()
  .then(response => {
      const normalized = mobiNormalizer(response)
      const vehicles = reduce(normalized.entities.mobi, (result, value, key) => {
        const coordArray = split(value.coordinates, ',')
        result.push({
          id: key,
          latlng: {
            latitude: toNumber(coordArray[0]),
            longitude: toNumber(coordArray[1])
          },
          type: 'mobiPin',
          address: value.name,
          avlBikes: value.avl_bikes
        })
        return result
      }, [])

      dispatch({
        type: GET_VISIBLE_CARS,
        vehicles
      })
    },
    errors => {
      dispatch({
        type: PROPAGATE_ERROR,
        message: errors.message
      })
    }
  )

export const setMobiVisibility = visible => dispatch => {
  if (visible) {
    dispatch({
      type: CARS_LOADED,
      loaded: false
    })
    dispatch(fetchMobi())
      .then(() => {
        return dispatch({
          type: CARS_LOADED,
          loaded: true
        })
      })
  }
  return dispatch({
    type: SET_MOBI_VISIBILITY,
    visible
  })
}

export const updateRegion = region => dispatch => {
  return dispatch({
    type: ON_REGION_CHANGE,
    region
  })
}

// this is a thunk (redux-thunk)
export const fetchModoCars = () => dispatch => getModoCars()
  .then(cars => {
    // placemarks => [objects]
    // Normalized to entities => {objects} and result => [keys]
    normalized= modoVehicleNormalizer(cars)
    console.log('MODO NORMALIZED', normalized)

    const vehicles = reduce(normalized.entities.vehicles, (result, value, key) => {
      result.push({
        id: key,
        latlng: {
          latitude: value.Latitude,
          longitude: value.Longitude
        },
        type: 'modoPin',
        address: value.LocationName,
        name: value.CarDescription
      })
      return result
    }, [])

    dispatch({
      type: GET_VISIBLE_CARS,
      vehicles
    })
  },
  errors => {
    dispatch({
      type: PROPAGATE_ERROR,
      message: errors.message
    })
  }
)
