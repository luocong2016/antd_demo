import React from 'react';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch } from 'dva/router';

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    component: () => import('./routes/IndexPage'),
  });

  const Users = dynamic({
    app,
    models: () => [import('./models/users')],
    component: () => import('./routes/Users'),
  });

  const Products = dynamic({
    app,
    models: () => [import('./models/products')],
    component: () => import('./routes/Products'),
  });

  const Todo = dynamic({
    app,
    models: () => [import('./models/todo')],
    component: () => import('./routes/Todo'),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
