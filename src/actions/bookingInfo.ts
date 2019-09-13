import { Action, ActionType, BookingInfo } from '../model/model'
import bookingInfoApi from '../services/bookingInfoApi'

export const fetchBookingInfo = () => async (dispatch: Function) => {
  dispatch({ type: ActionType.FETCHING_BOOKINGINFO })
  try {
    const { data } = await bookingInfoApi.get('/bookingInfo')
    dispatch({ type: ActionType.FETCH_BOOKINGINFO_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ActionType.FETCH_BOOKINGINFO_FAIL,
      payload: error.response
    })
  }
}
