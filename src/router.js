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

  const routes = [
    {
      path: '/todo',
      models: () => [import('./models/todo')],
      component: () => import('./routes/Todo'),
    }, {
      path: '/products',
      models: () => [import('./models/products')],
      component: () => import('./routes/Products'),
    }, {
      path: '/table',
      models: () => [import('./models/table')],
      component: () => import('./routes/Tables'),
    }, {
      path: '/transfer',
      component: () => import('./Transfer/TransferDemo'),
    }, {
      path: '/tree',
      component: () => import('./Transfer/TreeDemo'),
    }, {
      path: '/btn',
      component: () => import('./Btn/Btn'),
    }, {
      path: '/loading',
      component: () => import('./Loading/LoadingDemo'),
    }, {
      path: '/ES6React',
      component: () => import('./ES6React'),
    }, {
      path: '/Markdown',
      component: () => import('./MyComponents/Markdown'),
    },
  ];

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/users" component={Users} />
        {
         routes.map(({ path, ...dynamics }, key) => (
           <Route key={key} exact path={path} component={dynamic({ app, ...dynamics })} />
         ))
         }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
