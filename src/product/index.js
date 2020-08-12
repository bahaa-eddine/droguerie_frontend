import React, { Fragment } from "react";
import ListProductsContainer from "./components/ListProductsContainer";

export default class ProductComponent extends React.Component {
  render() {
    return (
      <Fragment>
        <div>Product</div>
        <ListProductsContainer />
      </Fragment>
      )
  }
}

