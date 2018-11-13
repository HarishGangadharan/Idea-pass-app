import * as React from 'react';
import { Route, Switch } from 'react-router';
import ability from 'src/ability';
import { Can } from 'src/ability-context';
import Admin from 'src/pages/Admin';
import AppForm from 'src/pages/AppForm';
import FormTrigger from 'src/pages/FormTrigger';
import FormTriggerList from 'src/pages/FormTriggerList';
import DynamicTableRender from '../pages/DynamicTableRenderer';
import FormBuilder from '../pages/FormBuilder';
import FormDataList from '../pages/FormDataList';
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
        path: '/rolespermissions',
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
        component: FormRenderer,
        exact: true,
        path: '/formRenderer/:id/:submissionId'
      },
      {
        component: FormTrigger,
        exact: true,
        path: '/formTrigger/:id'
      },
      {
        component: FormTrigger,
        exact: true,
        path: '/formTrigger/:id/:triggerId'
      },
      {
        component: FormDataList,
        exact: true,
        path: '/formdatalist/:formName/:formId'
      },
      {
        component: FormTriggerList,
        exact: true,
        path: '/formTriggerList/:formName/:formId'
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
      <Can I="read" a="default">
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route key={index}
                exact={route.exact}
                path={route.path}
                render={(routeProps) => {
                  const SubjectComponent = route.subject ? (ability.can('read', route.subject) ? route.component : NoMatch) : route.component;
                  return <SubjectComponent {...routeProps} {...{ subject: route.subject }} />;
                }}
              />
            );
          })}
        </Switch>
      </Can>
    );
  }
}

export const persistantRoutes = () => (
  <Switch>
    <Route component={Login} />
  </Switch>
);

