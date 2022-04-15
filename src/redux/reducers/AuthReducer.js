import { AUTH_DATA_FAILED, ADD_AUTH_DATA } from "../ActionTypes";

const initialState = {
    authed: false,
    data: {
        login: '',
        password: ''
    },
    error: false
  };

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTH_DATA:
          return {
            authed: true,
            data: action.payload,
            error: false,
          };
        case AUTH_DATA_FAILED:
          return {
            authed: false,
            data: {
                login: '',
                password: ''
            },
            error: true
          };
        default:
          return state;
      }
}