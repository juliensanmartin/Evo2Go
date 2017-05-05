import { createSelector } from 'reselect';
import { concat, reduce, isEmpty } from 'lodash';

// Selector for car model : define and transform data for component usage :
// http://redux.js.org/docs/recipes/ComputingDerivedData.html

// Select entities from state
const getCar2GoVehicles = (state) => state.car.car2go.vehicles;
const getEvoVehicles = (state) => state.car.evo.vehicles;

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
    })
    return result;
  }, [])
);

const getAllMarkers = createSelector(
  [getCar2GoMarkers, getEvoMarkers],
  (car2goMarkers, evoMarkers) => concat(car2goMarkers, evoMarkers)
);

const isLoaded = createSelector(
  [getCar2GoVehicles, getEvoVehicles],
  (car2goVehicles, evoVehicle) => !isEmpty(car2goVehicles) && !isEmpty(evoVehicle)
);

export {
  getAllMarkers,
  isLoaded,
};
