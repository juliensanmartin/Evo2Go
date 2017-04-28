import { GET_CAR2GO_CARS, GET_EVO_CARS } from './actions.type';
import { getAvailableVehicleCar2Go } from '../car2go.api';
import { getAvailableVehicleEvo } from '../evo.api';
import { normalize, schema } from 'normalizr';
import { vehicles } from '../schema';

// this is a thunk (redux-thunk)
export const fetchCar2GoCars = () => (dispatch, getState) => {
  return getAvailableVehicleCar2Go()
  .then(placemarks => {
      let markers = [];

      const vehicleSchema = new schema.Entity('placemarks', {idAttribute: 'vin'});
      const vehicleListSchema = [vehicleSchema];

      response = normalize(placemarks, vehicleListSchema);

      console.log(response);
      response.map(placemark => {
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
