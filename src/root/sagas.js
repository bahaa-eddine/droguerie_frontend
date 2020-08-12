import { all } from 'redux-saga/effects'
import { watchGetProducts } from '../product/sagaWatchers'

export default function* () {
  yield all([
    watchGetProducts()
  ])
}