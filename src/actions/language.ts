import { Action, ActionType, BookingInfo } from '../model/model'
import bookingInfoApi from '../services/bookingInfoApi'

export const fetchLanguage = () => async (dispatch: Function) => {
  dispatch({ type: ActionType.FETCHING_LANGUAGE })
  await new Promise(resolve => setTimeout(resolve, 2000))
  try {
    const { data } = await bookingInfoApi.get('/language')
    dispatch({ type: ActionType.FETCH_LANGUAGE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ActionType.FETCH_LANGUAGE_FAIL,
      payload: error.response
    })
  }
}
