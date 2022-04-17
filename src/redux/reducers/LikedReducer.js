import { UPDATE_LIKED } from "../ActionTypes";

const initialState = {
    liked: []
};

export const likedReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LIKED:
          console.log("hello")
          return {
            liked: action.payload,
          };
        default:
          return state;
      }
}