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

export enum ActionType {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  UNCOMPLETE_TODO,

  SET_FROM_FILTER,
  SET_TO_FILTER,
  SET_SELECTED_VENUE
}

export interface Action<T> {
  type: ActionType
  payload: T
}
