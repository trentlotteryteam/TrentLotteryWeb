import { combineReducers } from 'redux'
import {appConfigReducer} from '../util/config'

export const makeRootReducer = () => {
  return combineReducers({
    CONFIG: appConfigReducer
  })
}

export default makeRootReducer
