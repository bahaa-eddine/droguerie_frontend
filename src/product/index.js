import React, { Fragment } from "react";
import { Route, Switch } from 'react-router-dom';

import MenuAppBar from '../includes/appbar/appbarContainer';
import ListProductsContainer from "./containers/ListProductsContainer";
import AddProductContainer from "./containers/AddProductContainer";
import { ADD_PRODUCT } from './paths'
import './style.scss'

export default class ProductComponent extends React.Component {

  render() {
    return (
      <Switch>
        <Fragment>
          <MenuAppBar />
          <Route exact path={this.props.match.path} component={ListProductsContainer} />
          <Route exact path={`${this.props.match.path}/${ADD_PRODUCT}`} component={AddProductContainer} />
        </Fragment>
      </Switch>
    )
  }
}