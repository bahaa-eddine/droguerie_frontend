import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GET_PRODUCTS } from '../actions'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import '../style.css'

class ListProductsComponent extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { fetching, products } = this.props
    console.log(this.props)
    return (
      (fetching || products === undefined)
        ? <div>Loading ...</div>
        : <TableContainer component={Paper}>
          <Table className="table" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="right">Categorie</TableCell>
                <TableCell align="right">Fragility</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="left">{product.description}</TableCell>
                  <TableCell align="right">{product.fragility}</TableCell>
                  <TableCell align="right">{product.categorie}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>)
  }
}

const mapStateTopProps = (state) => {
  return {
    products: state.productReducer.products,
    fetching: state.productReducer.fetching
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
