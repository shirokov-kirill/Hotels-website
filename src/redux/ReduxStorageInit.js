import { applyMiddleware, combineReducers, createStore } from "redux"
import createSagaMiddleware from "redux-saga"
import {hotelsReducer} from "./reducers/HotelsReducer"
import { authReducer } from "./reducers/AuthReducer"
import watchFetchHotels from "./sagas/FetchHotels"
import {InitialLogin} from "./reducers/forms"
import { createForms } from "react-redux-form"
import { filtersReducer } from "./reducers/FiltersReducer"
import { carouselImagesReducer } from "./reducers/CarouselImages"
import { likedReducer } from "./reducers/LikedReducer"

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
    combineReducers({
        hotels: hotelsReducer, 
        authed: authReducer,
        filters: filtersReducer,
        images: carouselImagesReducer,
        liked: likedReducer,
        ...createForms({
            login: InitialLogin
        })
    }),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchFetchHotels)