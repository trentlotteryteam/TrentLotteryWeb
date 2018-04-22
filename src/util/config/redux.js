/**
 * Created by yangyang on 2018/4/22.
 */
import {call, put, takeLatest} from 'redux-saga/effects';
import {createAction} from 'redux-actions';
import {REHYDRATE} from 'redux-persist'
import {Record, Map, List} from 'immutable'

/****  Model  ****/

export class AppConfig extends Record({
  hasWallet: undefined
}, 'AppConfig') {}

/**** Constant ****/

const UPDATE_HAS_WALLET = 'UPDATE_HAS_WALLET'
const SAVE_HAS_WALLET = 'SAVE_HAS_WALLET'

/**** Action ****/

export const appConfigAction = {
  updateHasWallet: createAction(UPDATE_HAS_WALLET)
}

const saveHasWallet = createAction(SAVE_HAS_WALLET)

/**** Saga ****/

function* sagaUpdateHasWallet(action) {
  let payload = action.payload
  
  try {
    yield put(saveHasWallet({hasWallet: payload.hasWallet}))
  } catch (e) {
    if (payload.error) {
      payload.error()
    }
  }
}

export const appConfigSaga = [
  takeLatest(UPDATE_HAS_WALLET, sagaUpdateHasWallet),
]

/**** Reducer ****/

const initialState = new AppConfig()

export function appConfigReducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_HAS_WALLET:
      return handleSaveHasWallet(state, action)
    case REHYDRATE:
      return onRehydrate(state, action);
    default:
      return state
  }
}

function handleSaveHasWallet(state, action) {
  let payload = action.payload
  state = state.set('hasWallet', payload.hasWallet)
  return state
}

function onRehydrate(state, action) {
  let incoming = action.payload ? action.payload.CONFIG : undefined
  if (!incoming) {
    return state
  }
  
  state = state.set('hasWallet', incoming.hasWallet)
  
  return state
}

/**** Selector ****/

function selectHasWallet(state) {
  return state.CONFIG.hasWallet
}

export const appConfigSelector = {
  selectHasWallet,
}