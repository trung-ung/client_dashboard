import createReducer from './createReducer'
import { Action, ActionType, Language } from '../model/model'

const initialState = {
  langcode: 'en',
  text: {
    dashboard: 'Dashboard',
    venue: 'Venue',
    from: 'From',
    to: 'To',
    today: 'Today',
    ok: 'OK',
    definiteBookingValue: 'DEFINITE BOOKING VALUE',
    unconfirmedBookingValue: 'UNCONFIRMED BOOKING VALUE',
    eventHeld: 'EVENT HELD',
    totalBookings: 'TOTAL BOOKINGS',
    definiteBookingPercent: 'DEFINITE BOOKING PERCENT',
    revenueEarned: 'REVENUE EARNED',
    overallStatus: 'Overall Status',
    hotelPending: 'Hotel pending',
    customerPending: 'Customer pending',
    confirms: 'Confirms',
    cancelBookings: 'CANCEL BOOKINGS',
    topCancelReasons: 'Top Cancel Reasons',
    reasons: 'Reasons',
    times: 'Times',
    viewAll: 'VIEW ALL',
    averageDefiniteBookingValue: 'AVERAGE DEFINITE BOOKING VALUE',
    averageDelegateCount: 'AVERAGE DELEGATE COUNT',
    averageLeadTime: 'AVERAGE LEAD TIME',
    bookingSources: 'Booking Sources',
    source: 'Source',
    latestUpdatedOrders: 'Latest Updated Orders',
    orderRef: 'Order Ref',
    customer: 'Customer',
    date: 'Date',
    status: 'Status',
    confirmedBookingAmount: 'Confirmed Booking Amount',
    selectedDuration: 'Selected Duration'
  },
  isLoading: false,
  error: null
}

export const language = createReducer(initialState, {
  [ActionType.FETCH_LANGUAGE_SUCCESS](
    state: Language,
    action: Action<Language>
  ) {
    return { ...state, ...action.payload, isLoading: false }
  },

  [ActionType.FETCHING_LANGUAGE](state: Language) {
    return { ...state, isLoading: true }
  },

  [ActionType.FETCH_LANGUAGE_FAIL](state: Language, action: Action<any>) {
    return { ...state, error: action.payload, isLoading: false }
  }
})
