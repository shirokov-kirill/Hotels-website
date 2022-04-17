import * as ActionTypes from './ActionTypes'

export const addHotels = (hotels) => ({
    type: ActionTypes.ADD_HOTELS,
    payload: hotels
})

export const hotelsLoading = () => ({
    type: ActionTypes.HOTELS_LOADING
})

export const hotelsFailed = (errmess) => ({
    type: ActionTypes.HOTELS_FAILED,
    payload: errmess
})

export const fetchHotels = (filters) => ({
    type: ActionTypes.FETCH_HOTELS,
    payload: filters
})

export const saveLoginInfo = (value) => ({
    type: ActionTypes.ADD_AUTH_DATA,
    payload: value
})

export const saveFilters = (city, fromDate, forNDays) => ({
    type: ActionTypes.ADD_FILTERS,
    payload: {
        city: city,
        fromDate: fromDate,
        forNDays: forNDays
    }
})

export const updateLiked = (liked) => ({
    type: ActionTypes.UPDATE_LIKED,
    payload: liked
})