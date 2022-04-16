import {addHotels, hotelsLoading, hotelsFailed} from "../ActionCreators"
import {FETCH_HOTELS} from "../ActionTypes"
import {takeEvery, put, call} from "redux-saga/effects"

export default function* watchFetchHotels() {
    yield takeEvery(FETCH_HOTELS, fetchHotelsAsync);
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(Number(result.getDate()) + Number(days));
  return result;
}

function* fetchDataForFilters(filters){
  const response = yield call(fetch, `http://engine.hotellook.com/api/v2/cache.json?location=${filters.city}&currency=rub&`+
  `checkIn=${filters.fromDate}&`+
  `checkOut=${addDays(filters.fromDate, filters.forNDays).toISOString().slice(0,10)}&limit=10`);
  const data = yield response.json();
  return data
}
  
function* fetchHotelsAsync(action) {
    const filters = action.payload
    try {
      yield put(hotelsLoading())
      const hotelsByFilters = yield call(() => {
          return fetchDataForFilters(filters)
      })
      yield put(addHotels(hotelsByFilters));
    } catch (error) {
      console.log(error)
      yield put(hotelsFailed(error.message));
    }
}