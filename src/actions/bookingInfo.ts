import { Action, ActionType, BookingInfo } from '../model/model'
import bookingInfoApi from '../services/bookingInfoApi'
import { useCallback } from 'react'

export const fetchBookingInfo = () => async (dispatch: Function) => {
  dispatch({ type: ActionType.FETCHING_BOOKINGINFO })
  await new Promise(resolve => setTimeout(resolve, 2000))
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
