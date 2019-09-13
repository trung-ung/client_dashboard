import createReducer from './createReducer'
import { Action, ActionType, BookingInfo } from '../model/model'

const initialState = {
  confirms: 0,
  customerPending: 0,
  hotelPending: 0,
  venues: [],
  confirmedBookingValue: null,
  confirmedBookingValueSupport: null,
  totalBookings: null,
  totalBookingsSupport: null,
  successBookingRate: null,
  revenueEarned: null,
  canceledBookings: null,
  canceledBookingsSupport: null,
  canceledReasons: [],
  orders: [],
  sourceOfWebsite: [],
  isLoading: false,
  error: null
}

export const bookingInfo = createReducer(initialState, {
  [ActionType.FETCH_BOOKINGINFO_SUCCESS](
    state: BookingInfo,
    action: Action<BookingInfo>
  ) {
    return { ...state, ...action.payload, isLoading: false }
  },

  [ActionType.FETCHING_BOOKINGINFO](state: BookingInfo) {
    return { ...state, isLoading: true }
  },

  [ActionType.FETCH_BOOKINGINFO_FAIL](state: BookingInfo, action: Action<any>) {
    return { ...state, error: action.payload, isLoading: false }
  }
})
