import { Action, ActionType, Auth } from '../model/model'
import bookingInfoApi from '../services/bookingInfoApi'
import keysToCamel from '../helpers/keysToCamel'

export const loadUser = () => async (dispatch: Function) => {
  dispatch({ type: ActionType.AUTH_ING })
  try {
    let data
    if (process.env.NODE_ENV === 'development') {
      const res = await bookingInfoApi.get('/user/info')

      data = res.data
    } else {
      const res = await bookingInfoApi.get('/user/info')
      data = res.data
    }

    if (data === false) {
      dispatch({
        type: ActionType.AUTH_FAIL,
        payload: data
      })
    }

    data = keysToCamel(data)

    //const { data } = await bookingInfoApi.get('/bookingInfo')
    dispatch({ type: ActionType.AUTH_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ActionType.AUTH_FAIL,
      payload: error.response
    })
  }
}
