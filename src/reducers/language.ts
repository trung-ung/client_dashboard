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
    selectedDuration: 'Selected Duration',
    noDataToDisplay: 'No data to display.',
    definiteBookings: 'DEFINITE BOOKINGS',
    futureBookings: 'Future Bookings',
    bookingStatus: 'Booking Status',
    eventHeldTooltip: 'The number of events that took place in the time span.',
    totalBookingsTooltip:
      'The total number of booking requests that were received in the time span.',
    revenueEarnedTooltip:
      'The total value of confirmed orders that were received in the time span.',
    averageDefiniteBookingValueTooltip:
      'he average value (incl. VAT) of confirmed orders that were booked in the time span.',
    averageDelegateCountTooltip:
      'The average number of participants of an event in the time span.',
    averageLeadTimeTooltip:
      'The average number of days from the Order date to the Event date - for orders received in the time span.',
    days: 'days',
    participants: 'participants'
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
