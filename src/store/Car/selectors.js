import { createSelector } from 'reselect'
import { concat, reduce, isEmpty, reject } from 'lodash'

// Selector for car model : define and transform data for component usage :
// http://redux.js.org/docs/recipes/ComputingDerivedData.html

// Select entities from state
const getCar2GoVehicles = (state) => state.car.car2go.vehicles
const getEvoVehicles = (state) => state.car.evo.vehicles
const getCar2GoVisibility = (state) => state.car.car2go.visible
const getEvoVisibility = (state) => state.car.evo.visible

const getCar2GoMarkers = createSelector(
  getCar2GoVehicles,
  vehicles => reduce(vehicles, (result, value, key) => {
    result.push({
      id: key,
      latlng: {
        latitude: value.coordinates[1],
        longitude: value.coordinates[0],
      },
      type: 'car2GoPin',
      address: value.address,
      fuel: value.fuel,
      name: value.name
    })
    return result;
  }, [])
);

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
    return result;
  }, [])
);

const getAllMarkers = createSelector(
  [getCar2GoMarkers, getEvoMarkers],
  (car2goMarkers, evoMarkers) => concat(car2goMarkers, evoMarkers)
);

const getVisibleMarkers = createSelector(
  [ getCar2GoVisibility, getEvoVisibility, getAllMarkers ],
  (car2goVisible, evoVisible, markers) => {
    let result = markers
    if (!car2goVisible) {
      result = reject(result, {type:'car2GoPin'})
    }
    if (!evoVisible) {
      result = reject(result, {type:'evoPin'})
    }
    return result
  }
)

const isLoaded = createSelector(
  [getCar2GoVehicles, getEvoVehicles],
  (car2goVehicles, evoVehicle) => !isEmpty(car2goVehicles) && !isEmpty(evoVehicle)
)

export {
  getAllMarkers,
  isLoaded,
  getVisibleMarkers,
  getCar2GoVisibility,
  getEvoVisibility
}
