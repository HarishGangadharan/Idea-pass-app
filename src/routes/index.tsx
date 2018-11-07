import * as React from 'react';
import { Route, Switch } from 'react-router';
import ability from 'src/ability';
import Admin from 'src/pages/Admin';
import AppForm from 'src/pages/AppForm';
import DynamicTableRender from '../pages/DynamicTableRenderer';
import FormBuilder from '../pages/FormBuilder';
import FormRenderer from '../pages/FormRenderer';
import FormSchemaList from '../pages/FormSchemaList';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NoMatch from '../pages/NoMatch';

export class LoggedInRoutes extends React.Component {
  public render() {
    const routes = [
      {
        component: Home,
        exact: true,
        path: '/'
      },
      {
        component: FormSchemaList,
        path: '/formschemalist'
      },
      {
        component: Admin,
        path: '/admin',
        subject: 'admin'
      },
      {
        component: FormBuilder,
        exact: true,
        path: '/formBuilder'
      },
      {
        component: FormBuilder,
        path: '/formBuilder/:id'
      },
      {
        component: FormRenderer,
        exact: true,
        path: '/formRenderer/:id'
      },
      {
        component: AppForm,
        exact: true,
        path: '/appforms/:id',
        subject: 'appforms'
      },
      {
        component: DynamicTableRender,
        exact: true,
        path: '/dynamicTable'
      },
      {
        component: NoMatch,
        subject: 'No Match'
      }
    ];
    return (
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route key={index}
              exact={route.exact}
              path={route.path}
              render={(routeProps) => {
                const SubjectComponent = route.subject ? (ability.can('read', route.subject) ? route.component : NoMatch) : route.component;
                return <SubjectComponent {...routeProps} {...{subject: route.subject}}/>;
              }}
            />
          );
        })}
      </Switch>
    );
  }
}

export const persistantRoutes = () => (
  <Switch>
    <Route component={Login} />
  </Switch>
);

