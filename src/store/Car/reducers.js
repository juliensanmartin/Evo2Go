import { GET_CAR2GO_CARS, GET_EVO_CARS } from './actions.type';
import { combineReducers } from 'redux';

const initialState = {
  markers: [],
};

const car2go = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR2GO_CARS:
      return {
        ...state,
        markers: action.markers,
      };
    default:
      return state;
  }
};

const evo = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVO_CARS:
      return {
        ...state,
        markers: action.markers,
      };
    default:
      return state;
  }
};

export default car = combineReducers({
	car2go, evo
});
