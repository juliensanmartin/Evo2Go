import { GET_CAR2GO_CARS, GET_EVO_CARS } from './actions.type';
import { getAvailableVehicleCar2Go } from '../car2go.api';
import { getAvailableVehicleEvo } from '../evo.api';
import { car2goVehicleNormalizer, evoVehicleNormalizer } from './schema';

// this is a thunk (redux-thunk)
export const fetchCar2GoCars = () => (dispatch, getState) => getAvailableVehicleCar2Go()
  .then(placemarks => {
      // placemarks => [objects]
      // Normalized to entities => {objects} and result => [keys]
      normalized= car2goVehicleNormalizer(placemarks);
      console.log('CAR2GO NORMALIZED', normalized);

      return dispatch({
        type: GET_CAR2GO_CARS,
        vehicles: normalized.entities.vehicles,
      });
    },
    errors => console.error(errors)
  )

export const fetchEvoCars = () => (dispatch, getState) => getAvailableVehicleEvo()
  .then(data => {
    normalized = evoVehicleNormalizer(data);
    console.log('EVO NORMALIZED', normalized);

      return dispatch({
        type: GET_EVO_CARS,
        vehicles: normalized.entities.vehicles,
      });
    },
    errors => console.error(errors)
  )
