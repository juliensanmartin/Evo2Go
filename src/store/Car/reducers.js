import { GET_CAR2GO_CARS } from './actions.type';

const initialState = {
  markers: [],
};

const reducer = (state = initialState, action) => {
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

export default reducer;
