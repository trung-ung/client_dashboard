import { createBrowserHistory } from 'history'
import * as localforage from 'localforage'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import {
  PersistConfig,
  persistReducer,
  persistStore,
  createTransform
} from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
//@ts-ignore
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const DateTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  //   (inboundState, key) => {
  //     // convert mySet to an Array.
  //     return { ...inboundState, to: JSON.stringify(to) }
  //   },

  // transform state being rehydrated
  (outboundState, key) => {
    // convert mySet back to a Set.

    return {
      ...outboundState,
      //@ts-ignore
      to: new Date(outboundState.to),
      //@ts-ignore
      from: new Date(outboundState.from)
    }
  },

  // define which reducers this transform gets called for.
  //@ts-ignore
  { whitelist: ['filter'] }
)

const persistConfig: PersistConfig = {
  key: 'root',
  version: 1,
  storage: localforage,
  blacklist: ['filter'],
  stateReconciler: autoMergeLevel2,
  transforms: [DateTransform]
}

const logger = (createLogger as any)()
const history = createBrowserHistory()

const dev = process.env.NODE_ENV === 'development'

let middleware = dev ? applyMiddleware(logger, thunk) : applyMiddleware(thunk)

if (dev) {
  middleware = composeWithDevTools(middleware)
}

const persistedReducer = persistReducer(persistConfig, rootReducer(history))

export default () => {
  const store = createStore(persistedReducer, {}, middleware)
  const persistor = persistStore(store)
  return { store, persistor }
}

export { history }
