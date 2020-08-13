import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  // GET_PRODUCTS,
  SET_PRODUCTS,
  // PUT_PRODUCT,
  // POST_PRODUCT,
  // DELETE_PRODUCT,
  // CANCEL_PRODUCT_UPDATE,
  // EDIT_PRODUCT,
} from './actions'

const uri = 'http://localhost:8080/products/'

export function* workerGetProducts() {
  try {
    const result = yield call(axios.get, uri);
    yield put({ type: SET_PRODUCTS, value: result.data.message });
  }
  catch {
    console.log('Failed');
  }
}

// export function* workerPostProduct(action) {
//   console.log('Adding a product');
//   console.log(action.value);
//   try {
//     const uri = 'http://localhost:8080/products/';
//     const result = yield call(axios.post, uri, action.value);
//     yield put({ type: GET_PRODUCTS });
//     console.log('Added a product successfullt');
//   }
//   catch {
//     console.log('Failed');
//   }
// }

// export function* workerPutProduct(action) {
//   console.log('Updating a product');
//   try {
//     const uri = `https://jsonplaceholder.typicode.com/products/${action.value.id}`;
//     const result = yield call(axios.put, uri, action.value);
//     yield put({ type: GET_PRODUCTS });
//     console.log('Updated a product successfully');
//   }
//   catch {
//     console.log('Failed');
//   }
// }

// export function* workerDeleteProduct(action) {
//   console.log('Deleting a product');
//   try {
//     const uri = `http://localhost:8080/products/${action.value}`;
//     const result = yield call(axios.delete, uri);
//     yield put({ type: GET_PRODUCTS });
//     console.log('Deleted a product successfully');
//   }
//   catch {
//     console.log('Failed');
//   }
// }

// export function* workerEditProduct(action) {
//   console.log('Editing a product', action);
//   yield put({ type: SET_EDIT_MODE_PRODUCT, value: { productId: action.value, editMode: true } });
// }

// export function* workerCancelProductUpdate(action) {
//   console.log('Cancelled a product edit');
//   yield put({ type: SET_EDIT_MODE_PRODUCT, value: { productId: action.value, editMode: false } });
// }