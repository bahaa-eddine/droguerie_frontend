import { connect } from 'react-redux'
import ListProductsComponent from '../components/ListProductsComponent'
import { GET_PRODUCTS } from '../actions'

const mapStateTopProps = (state) => {
  return {
    products: state.productReducer.products,
    fetching: state.productReducer.fetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch({ type: GET_PRODUCTS })
    }
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(ListProductsComponent);
