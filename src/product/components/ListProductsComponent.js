import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreateIcon from '@material-ui/icons/Create';

import { ADD_PRODUCT } from '../paths'

import '../style.scss'

export default class ListProductsComponent extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { fetching, products } = this.props
    return (
      (fetching || products === undefined)
        ? <div>Loading ...</div>
        :
        <Fragment>
          <CssBaseline />
          <Container className="padding-20">
            <TableContainer component={Paper}>
              <Table className="table" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="right">Categorie</TableCell>
                    <TableCell align="right">Fragility</TableCell>
                    <TableCell align="right">Price (Dh)</TableCell>
                    <TableCell align="right">
                      <Grid container>
                        <Grid item xs={12}>
                          <Link to={`${this.props.match.path}/${ADD_PRODUCT}`}>
                            <IconButton aria-label="update product" component="span">
                              <AddCircleIcon />
                            </IconButton>
                          </Link>
                        </Grid>
                      </Grid>
                    </TableCell>
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
                      <TableCell align="right">
                        <Grid container>
                          <Grid item xs={8}>
                            <IconButton color="primary" aria-label="update product" component="span">
                              <CreateIcon />
                            </IconButton>
                          </Grid>
                          <Grid item xs={4}>
                            <IconButton color="secondary" aria-label="delete product" component="span">
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Fragment>
    )
  }
}

