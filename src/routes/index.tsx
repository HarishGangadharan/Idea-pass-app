import * as React from 'react';
import { Route, Switch } from 'react-router';
import Admin from 'src/pages/Admin';
import DynamicTableRender from '../pages/DynamicTableRenderer';
import FormBuilder from '../pages/FormBuilder';
import FormRenderer from '../pages/FormRenderer';
import FormSchemaList from '../pages/FormSchemaList';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NoMatch from '../pages/NoMatch';
import Organization from '../pages/Organization';

export const loggedInRoutes = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/formschemalist" component={FormSchemaList} />
    <Route path="/organization" component={Organization} />
    <Route path="/admin" component={Admin} />
    <Route exact={true} path="/formBuilder" component={FormBuilder} />
    <Route path="/formBuilder/:id" component={FormBuilder} />
    <Route exact={true} path="/formRenderer/:id" component={FormRenderer} />
    <Route exact={true} path="/dynamicTable" component={DynamicTableRender} />
    <Route component={NoMatch} />
  </Switch>
);

export const persistantRoutes = () => (
  <Switch>
    <Route component={Login} />
  </Switch>
);

