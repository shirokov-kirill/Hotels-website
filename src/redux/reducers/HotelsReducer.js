import { ADD_HOTELS, HOTELS_FAILED, HOTELS_LOADING } from "../ActionTypes";

const initialState = {
    url: [],
    loading: false,
    error: false,
  };

export const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOTELS_LOADING:
          return {
            url: [],
            loading: true,
            error: false,
          };
        case ADD_HOTELS:
          return {
            url: action.payload,
            loading: false,
            error: false,
          };
        case HOTELS_FAILED:
          return {
            url: [],
            loading: false,
            error: true,
            errmess: action.payload
          };
        default:
          return state;
      }
}