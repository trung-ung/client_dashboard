import { Action, ActionType } from '../model/model'
import { number } from 'prop-types'

export function setFromFilter(from: Date): Action<Date> {
  return { type: ActionType.SET_FROM_FILTER, payload: from }
}

export function setToFilter(to: Date): Action<Date> {
  return { type: ActionType.SET_TO_FILTER, payload: to }
}

export function setSelectedVenue(venue: string): Action<string> {
  return { type: ActionType.SET_SELECTED_VENUE, payload: venue }
}

export function setDurationFilter(duration: string): Action<string> {
  return { type: ActionType.SET_DURATION_FILTER, payload: duration }
}

export function setLanguageFilter(langcode: string): Action<string> {
  return { type: ActionType.SET_LANGUAGE_FILTER, payload: langcode }
}

export function setStepFilter(
  stepNumb: string | number
): Action<string | number> {
  return { type: ActionType.SET_STEP_FILTER, payload: stepNumb }
}
