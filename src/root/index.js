import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import HomeComponent from '../home'
import ProductComponent from '../product'
import { getStore } from './store'

const store = getStore();
store.subscribe(() => {
  localStorage.setItem("applicationState", JSON.stringify(store.getState()));
});

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Fragment>
              <Route exact path='/' component={HomeComponent} />
              <Route path='/products' component={ProductComponent} />
            </Fragment>
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }

}

export default App;
