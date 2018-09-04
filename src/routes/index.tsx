import * as React from 'react';
import { Route, Switch } from 'react-router';
import Counter from '../components/Counter';
import Hello from '../components/Hello';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import NoMatch from '../components/NoMatch';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Counter} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
