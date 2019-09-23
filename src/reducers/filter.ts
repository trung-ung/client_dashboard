import { Action, ActionType, Filter } from '../model/model'
import moment from 'moment'
import createReducer from './createReducer'

const initialState = {
  selectedVenue: 'All venues',
  to: new Date(),
  from: moment(new Date())
    .subtract('3', 'month')
    .toDate(),
  duration: '1 month',
  language: 'en',
  step: 2
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
  },
  [ActionType.SET_DURATION_FILTER](state: Filter, action: Action<String>) {
    return { ...state, duration: action.payload }
  },
  [ActionType.SET_LANGUAGE_FILTER](state: Filter, action: Action<String>) {
    return { ...state, language: action.payload }
  },
  [ActionType.SET_STEP_FILTER](state: Filter, action: Action<String | Number>) {
    return { ...state, step: action.payload }
  }
})
