import { AUTH_DATA_FAILED, ADD_AUTH_DATA } from "../ActionTypes";

const initialState = {
    authed: false,
    error: false
  };

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTH_DATA:
          console.log(state.authed)
          return {
            authed: action.payload,
            error: false,
          };
        case AUTH_DATA_FAILED:
          return {
            authed: false,
            error: true
          };
        default:
          return state;
      }
}