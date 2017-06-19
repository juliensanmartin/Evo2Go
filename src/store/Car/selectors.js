import { createSelector } from 'reselect'
import { concat, reduce, isEmpty, reject } from 'lodash'

// Selector for car model : define and transform data for component usage :
// http://redux.js.org/docs/recipes/ComputingDerivedData.html

// Select entities from state
const getCar2GoVehicles = (state) => state.car.car2go.vehicles
const getEvoVehicles = (state) => state.car.evo.vehicles
const getCar2GoVisibility = (state) => state.car.car2go.visible
const getEvoVisibility = (state) => state.car.evo.visible
const getBusVehicles = (state) => state.car.translink.vehicles
const getBusVisibility = (state) => state.car.translink.visible

const getCar2GoMarkers = createSelector(
  getCar2GoVehicles,
  vehicles => reduce(vehicles, (result, value, key) => {
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
)

const getEvoMarkers = createSelector(
  getEvoVehicles,
  vehicles => reduce(vehicles, (result, value, key) => {
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
)

const getBusMarkers = createSelector(
  getBusVehicles,
  vehicles => reduce(vehicles, (result, value, key) => {
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
)

const getAllMarkers = createSelector(
  [getCar2GoMarkers, getEvoMarkers, getBusMarkers],
  (car2goMarkers, evoMarkers, busMarkers) => concat(car2goMarkers, evoMarkers, busMarkers)
)

const getVisibleMarkers = createSelector(
  [ getCar2GoVisibility, getEvoVisibility, getBusVisibility ,getAllMarkers ],
  (car2goVisible, evoVisible, busVisibility, markers) => {
    let result = markers
    if (!car2goVisible) {
      result = reject(result, {type:'car2GoPin'})
    }
    if (!evoVisible) {
      result = reject(result, {type:'evoPin'})
    }
    if (!busVisibility) {
      result = reject(result, {type:'busPin'})
    }
    return result
  }
)

const isLoaded = createSelector(
  [getCar2GoVehicles, getEvoVehicles, getBusVehicles],
  (car2goVehicles, evoVehicles, busVehicles) => !isEmpty(car2goVehicles) && !isEmpty(evoVehicles) && !isEmpty(busVehicles)
)

export {
  getAllMarkers,
  isLoaded,
  getVisibleMarkers,
  getCar2GoVisibility,
  getEvoVisibility,
  getBusVisibility
}
