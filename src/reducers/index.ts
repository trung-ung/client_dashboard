import { History } from 'history'
import { combineReducers } from 'redux'
import { Todo } from '../model/model'
import * as bookingInfoReducer from './bookingInfo'
import * as todoReducer from './todo'

export interface RootState {
  todoList: Todo[]
}

export default (history: History) =>
  combineReducers({
    ...todoReducer,
    ...bookingInfoReducer
  })
