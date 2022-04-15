import { ADD_FILTERS } from "../ActionTypes";

const initialState = {
    city: 'Москва',
    fromDate: new Date().toISOString().slice(0, 10),
    forNDays: 1
  };

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILTERS:
          return {
            city: action.payload.city,
            fromDate: action.payload.fromDate,
            forNDays: action.payload.forNDays
          };
        default:
          return state;
      }
}