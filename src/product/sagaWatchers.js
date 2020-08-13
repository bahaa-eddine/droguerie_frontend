import { takeEvery } from 'redux-saga/effects';

import * as ProductWorkers from './sagaWorkers';
import {
  GET_PRODUCTS,
  // SET_PRODUCTS,
  // PUT_PRODUCT,
  // POST_PRODUCT,
  // DELETE_PRODUCT,
  // CANCEL_PRODUCT_UPDATE,
  // EDIT_PRODUCT,
} from './actions'

const {
  workerGetProducts,
} = ProductWorkers

export const watchGetProducts = function* () {
  yield takeEvery(GET_PRODUCTS, workerGetProducts);
}


// export const watchPostProduct = function* () {
//   yield takeEvery(POST_PRODUCT, workerPostProduct);
// }

// export const watchPutProduct = function* () {
//   yield takeEvery(PUT_PRODUCT, workerPutProduct);
// }

// export const watchDeleteProduct = function* () {
//   yield takeEvery(DELETE_PRODUCT, workerDeleteProduct);
// }

// export const watchEditProduct = function* () {
//   yield takeEvery(EDIT_PRODUCT, workerEditProduct);
// }

// export const watchCancelProductUpdate = function* () {
//   yield takeEvery(CANCEL_PRODUCT_UPDATE, workerCancelProductUpdate);
// }

