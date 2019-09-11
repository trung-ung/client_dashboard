import createReducer from './createReducer'

const initialState = {
  piechartDetail: null,
  financialFigure: null,
  topRejectedReasons: [],
  events: [],
  sourceOfWebsite: []
}

export const bookingInfo = createReducer(initialState, {})
