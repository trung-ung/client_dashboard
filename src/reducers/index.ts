import { History } from 'history'
import { combineReducers } from 'redux'
import { Todo } from '../model/model'
import * as bookingInfoReducer from './bookingInfo'
import * as filterReducer from './filter'
import * as todoReducer from './todo'
import * as language from './language'
import * as auth from './auth'

export interface RootState {
  todoList: Todo[]
}

export default (history: History) =>
  combineReducers({
    ...todoReducer,
    ...bookingInfoReducer,
    ...filterReducer,
    ...language,
    ...auth
  })
