import { Action, ActionType, Filter } from '../model/model'

import moment from 'moment'
import createReducer from './createReducer'
const initialState = {
  selectedVenue: 'All venues',
  to: new Date(),
  from: moment(new Date())
    .subtract('1', 'month')
    .toDate(),
  duration: '1m'
}

export const filter = createReducer(initialState, {
  [ActionType.SET_FROM_FILTER](state: Filter, action: Action<Date>) {
    return { ...state, from: action.payload }
  },
  [ActionType.SET_TO_FILTER](state: Filter, action: Action<Date>) {
    return { ...state, to: action.payload }
  },
  [ActionType.SET_SELECTED_VENUE](state: Filter, action: Action<String>) {
    return { ...state, selectedVenue: action.payload }
  }
})
