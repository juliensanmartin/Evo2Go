import { GET_CAR2GO_CARS, GET_EVO_CARS } from './actions.type';
import { getAvailableVehicleCar2Go } from '../car2go.api';
import { getAvailableVehicleEvo } from '../evo.api';
import { normalize } from 'normalizr';
import { vehicleListSchema } from '../schema';

// this is a thunk (redux-thunk)
export const fetchCar2GoCars = () => (dispatch, getState) => {
  return getAvailableVehicleCar2Go()
  .then(placemarks => {
      let markers = [];

      placemarks.map(placemark => {
        markers.push({
          id: markers.length,
          latlng: {
            latitude: placemark.coordinates[1],
            longitude: placemark.coordinates[0],
          },
          type: 'car2GoPin',
        });
      });

      return dispatch({
        type: GET_CAR2GO_CARS,
        markers,
      });
    },
    errors => console.error(errors)
  )
};

export const fetchEvoCars = () => (dispatch, getState) => {
  return getAvailableVehicleEvo()
  .then(data => {
      let markers = [];

      response = normalize(data, vehicleListSchema);

      console.log(response);

      data.map(car => {
        markers.push({
          id: car.Id,
          latlng: {
            latitude: car.Lat,
            longitude: car.Lon,
          },
          type: 'evoPin',
        });
      });

      return dispatch({
        type: GET_EVO_CARS,
        markers,
      });
    },
    errors => console.error(errors)
  )
};
