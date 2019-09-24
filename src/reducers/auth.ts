import { Action, ActionType, Auth } from '../model/model'

import createReducer from './createReducer'

const initialState = {
  userId: '',
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  role: [],
  is_accepted_gdpr: '',
  isLoading: false,
  error: null
}

export const auth = createReducer(initialState, {
  [ActionType.AUTH_SUCCESS](state: Auth, action: Action<Auth>) {
    return { ...state, ...action.payload, isLoading: false }
  },
  [ActionType.AUTH_FAIL](state: Auth, action: Action<Auth>) {
    return { ...state, error: action.payload, isLoading: false }
  },
  [ActionType.AUTH_ING](state: Auth) {
    return { ...state, isLoading: true }
  }
})
