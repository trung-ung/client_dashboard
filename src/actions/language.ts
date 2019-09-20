import { Action, ActionType, BookingInfo } from '../model/model'
import bookingInfoApi from '../services/bookingInfoApi'

export const fetchLanguage = (langcode: String = 'en') => async (
  dispatch: Function
) => {
  dispatch({ type: ActionType.FETCHING_LANGUAGE })
  // await new Promise(resolve => setTimeout(resolve, 2000))
  try {
    let data
    if (process.env.NODE_ENV === 'development') {
      const res = await bookingInfoApi.get(
        `/translations/${langcode}/dashboard`
      )
      data = res.data
    } else {
      const res = await bookingInfoApi.get('/language')
      data = res.data
    }

    //const { data } = await bookingInfoApi.get('/language')
    // const { data } = await axios.get(

    //   `http://localhost/apiv2/translations/${langcode}/dashboard`
    // )
    dispatch({ type: ActionType.FETCH_LANGUAGE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ActionType.FETCH_LANGUAGE_FAIL,
      payload: error.response
    })
  }
}
