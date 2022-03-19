import { all } from 'redux-saga/effects'
import ProductsSaga from './ProductsSaga'

export default function* rootSaga() {
  yield all([...ProductsSaga])
}
