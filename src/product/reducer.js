import { SET_PRODUCTS, GET_PRODUCTS } from './actions';

const initialState = {
  products: [],
  fetching: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.value,  fetching: false }
    case GET_PRODUCTS:
      return { ...state, fetching: true }
    default: return state;
  }
}


export default productReducer;