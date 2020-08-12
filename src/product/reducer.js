import { SET_PRODUCTS } from './actions';

const productReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...action.value];
    default: return state;
  }
}


export default productReducer;