import { createSelector } from 'reselect';

// Select entities from state
const getCar2GoVehicles = (state) => state.car.car2go.vehicles;
const getEvoVehicles = (state) => state.car.evo.vehicles;

const getCar2GoMarkers = createSelector(
  getCar2GoVehicles,
  vehicles => vehicles.map(vehicle => (
    {
      id: vehicle.vin,
      latlng: {
        latitude: vehicle.coordinates[1],
        longitude: vehicle.coordinates[0],
      },
      type: 'car2GoPin',
    })
  )
);

const getEvoMarkers = createSelector(
  getEvoVehicles,
  vehicles => vehicles.map(vehicle => (
    {
      id: vehicle.Id,
      latlng: {
        latitude: car.Lat,
        longitude: car.Lon,
      },
      type: 'evoPin',
    })
  )
);

const getAllMarkers = createSelector(
  [getCar2GoMarkers, getEvoMarkers],
  (car2goMarkers, evoMarkers) => [car2goMarkers, evoMarkers]
);

export {
  getAllMarkers,
};
