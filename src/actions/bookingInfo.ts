import { Action, ActionType, BookingInfo } from '../model/model'
import bookingInfoApi from '../services/bookingInfoApi'
import keysToCamel from '../helpers/keysToCamel'

export const fetchBookingInfo = (
  venue_id: String | Number = 222595,
  from_date: String,
  to_date: String
) => async (dispatch: Function) => {
  dispatch({ type: ActionType.FETCHING_BOOKINGINFO })
  //await new Promise(resolve => setTimeout(resolve, 2000))
  try {
    let data
    if (process.env.NODE_ENV === 'development') {
      const res = await bookingInfoApi.get(
        `/supplier/statistics?venue_id=${venue_id}&from_date=${from_date}&to_date=${to_date}`
      )
      data = res.data
    } else {
      const res = await bookingInfoApi.get('/bookingInfo')
      data = res.data
    }

    data = keysToCamel(data)

    //const { data } = await bookingInfoApi.get('/bookingInfo')
    dispatch({ type: ActionType.FETCH_BOOKINGINFO_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ActionType.FETCH_BOOKINGINFO_FAIL,
      payload: error.response
    })
  }
}
