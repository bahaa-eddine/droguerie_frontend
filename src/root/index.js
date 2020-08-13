import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";

import HomeComponent from '../home'
import ProductComponent from '../product'
import { getStore } from './store'
import { HOME, PRODUCTS } from './paths'

const history = createBrowserHistory();
const store = getStore();
store.subscribe(() => {
  localStorage.setItem("applicationState", JSON.stringify(store.getState()));
});

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Fragment>
              <Route exact path={`/${HOME}`} component={HomeComponent} />
              <Route path={`/${PRODUCTS}`} component={ProductComponent} />
            </Fragment>
            <Redirect from="*" to={`/${HOME}`} />
          </Switch>
        </Router>
      </Provider>
    )
  }

}

export default App;
