import React from 'react';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch } from 'dva/router';

import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Users from './routes/Users.js';

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    component: () => import('./routes/IndexPage'),
  });

  const Users = dynamic({
    app,
    models: () => [
      import('./models/users'),
    ],
    component: () => import('./routes/Users'),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
