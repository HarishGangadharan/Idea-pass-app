import * as React from 'react';
import { Route, Switch } from 'react-router';
import Counter from '../pages/Counter';
import FormBuilder from '../pages/FormBuilder';
import FormRenderer from '../pages/FormRenderer';
import FormSchemaList from '../pages/FormSchemaList';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NoMatch from '../pages/NoMatch';

export const loggedInRoutes = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/formschemalist" component={FormSchemaList} />
    <Route path="/counter" component={Counter} />
    <Route exact={true} path="/formBuilder" component={FormBuilder} />
    <Route path="/formBuilder/:id" component={FormBuilder} />
    <Route exact={true} path="/formRenderer/:id" component={FormRenderer} />
    <Route component={NoMatch} />
  </Switch>
);

export const persistantRoutes = () => (
  <Switch>
    <Route component={Login} />
  </Switch>
);

