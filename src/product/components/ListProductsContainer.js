import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GET_PRODUCTS } from '../actions'

class ListProductsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    this.props.getProducts();
    console.log(this.props.products);
  }

  render() {
    return (<div>List Products</div>)
  }
}

const mapStateTopProps = (state) => {
  return {
    products: state.products
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
