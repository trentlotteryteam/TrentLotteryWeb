/**
 * Created by yangyang on 2017/6/28.
 */
import { all } from 'redux-saga/effects'
import {appConfigSaga} from '../util/config'

export default function* rootSaga() {
  yield all([
    ...appConfigSaga
  ])
}
