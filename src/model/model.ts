export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface Filter {
  from: Date
  to: Date
  selectedVenue: String
}

export interface BookingInfo {
  confirms: Number | String
  customerPending: Number | String
  hotelPending: Number | String
  venues: Array<String | Object>
  confirmedBookingValue: Number | String
  confirmedBookingValueSuport: Number | String
  totalBookings: Number | String
  totalBookingsSupport: Number | String
  successBookingRate: Number | String
  revenueEarned: Number | String
  canceledBookings: Number | String
  cancelBookingsSupport: Number | String
  cancelReasons: Array<String | Object>
  orders: Array<Object>
  sourceOfWebsite: Array<Object | String>
  isLoading: Boolean
  error: Object
}

export enum ActionType {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  UNCOMPLETE_TODO,

  SET_FROM_FILTER,
  SET_TO_FILTER,
  SET_SELECTED_VENUE,

  FETCH_BOOKINGINFO_SUCCESS,
  FETCH_BOOKINGINFO_FAIL,
  FETCHING_BOOKINGINFO
}

export interface Action<T> {
  type: ActionType
  payload: T
}
