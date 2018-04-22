/**
 * Created by yangyang on 2017/6/28.
 */
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import immutableTransform from 'redux-persist-transform-immutable'
import createSagaMiddleware, { END } from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import {createLogger} from 'redux-logger'
import makeRootReducer from './reducer'
import rootSaga from './saga'
import {AppConfig} from '../util/config'

const persistConfig = {
  key: 'root',
  storage,
  transforms: [immutableTransform({records: [AppConfig]})],
  whitelist: ['CONFIG']
}

export const history = createHistory()

const persistedReducer = persistReducer(persistConfig, makeRootReducer())

const logger = createLogger({predicate: (getState, action) => process.env.NODE_ENV === 'development'})
const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)
const middleware = [routeMiddleware, sagaMiddleware, logger]

const createStore = (initialState = {}) => {
  const store = createReduxStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(...middleware)
    ))
  sagaMiddleware.run(rootSaga)
  store.close = () => store.dispatch(END)
  return store
}

export const store = createStore()
export const persistor = persistStore(store, null, () => {
  let state = store.getState()
  console.log('after rehydrate state: ', state)
})