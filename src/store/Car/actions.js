import { GET_CAR2GO_CARS, GET_EVO_CARS } from './actions.type';
import { getAvailableVehicleCar2Go } from '../car2go.api';
import { getAvailableVehicleEvo } from '../evo.api';
import { car2goVehicleNormalizer, evoVehicleNormalizer } from '../schema';

// this is a thunk (redux-thunk)
export const fetchCar2GoCars = () => (dispatch, getState) => {
  return getAvailableVehicleCar2Go()
  .then(placemarks => {

      normalizedResponse = car2goVehicleNormalizer(placemarks);
      console.log(normalizedResponse);

      return dispatch({
        type: GET_CAR2GO_CARS,
        vehicles: normalizedResponse.entities,
      });
    },
    errors => console.error(errors)
  )
};

export const fetchEvoCars = () => (dispatch, getState) => {
  return getAvailableVehicleEvo()
  .then(data => {
    normalizedResponse = evoVehicleNormalizer(data);
    console.log(normalizedResponse);

      return dispatch({
        type: GET_EVO_CARS,
        vehicles: normalizedResponse.entities,
      });
    },
    errors => console.error(errors)
  )
};
