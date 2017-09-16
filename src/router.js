import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Users from './routes/Users.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
