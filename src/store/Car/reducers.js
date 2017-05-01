import { GET_CAR2GO_CARS, GET_EVO_CARS } from './actions.type';
import { combineReducers } from 'redux';
import { fromJS } from 'immutable';

// Initial Redux state is created with immutable.js.
// By this, we ensure that our state can not be mutated.
const initialState = fromJS({
  markers: [],
});

const car2go = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR2GO_CARS:
      // return {
      //   ...state,
      //   markers: action.markers,
      // };
      // reducer function uses immutable.js functions to return new state.
      // See “mergeDeep” functions below:
      return state.mergeDeep(action.markers);
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
