import * as React from 'react';
import { Route, Switch } from 'react-router';
import Counter from '../pages/Counter';
import FormBuilder from '../pages/FormBuilder';
import FormRenderer from '../pages/FormRenderer';
import Hello from '../pages/Hello';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NoMatch from '../pages/NoMatch';

export const loggedInRoutes = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/hello" component={Hello} />
    <Route path="/counter" component={Counter} />
    <Route path="/formBuilder" component={FormBuilder} />
    <Route path="/formRenderer" component={FormRenderer} />
    <Route component={NoMatch} />
  </Switch>
);

export const persistantRoutes = () => (
  <Switch>
    <Route component={Login} />
  </Switch>
);

