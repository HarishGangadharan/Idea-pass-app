import * as React from 'react';
import { Route, Switch } from 'react-router';
import ability from '../ability';
import { Can } from '../ability-context';
import Admin from '../pages/Admin';
import AppForm from '../pages/AppForm';
import DynamicTableRender from '../pages/DynamicTableRenderer';
import EmailTemplateList from '../pages/EmailTemplate/';
import EmailTemplate from '../pages/EmailTemplate/create';
import FormBuilder from '../pages/FormBuilder';
import FormDataList from '../pages/FormDataList';
import FormRenderer from '../pages/FormRenderer';
import FormSchemaList from '../pages/FormSchemaList';
import FormTrigger from '../pages/FormTrigger';
import FormTriggerList from '../pages/FormTriggerList';
import GraphiQl from '../pages/GraphiQl';
import GraphiQlList from '../pages/GraphiQlList';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NoMatch from '../pages/NoMatch';
import Users from '../pages/User';

export const routes = [
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
    path: '/formRenderer/:id/:pageType'
  },
  {
    component: FormRenderer,
    exact: true,
    path: '/formRenderer/:id/:submissionId/:pageType'
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
    path: '/formTriggerList/:formId'
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
    component: Users,
    exact: true,
    path: '/users'
  },
  {
    component: GraphiQlList,
    exact: true,
    path: '/graphiQlList'
  },
  {
    component: GraphiQl,
    exact: true,
    path: '/graphiQl'
  },
  {
    component: GraphiQl,
    exact: true,
    path: '/graphiQl/:id'
  },
  {
    component: EmailTemplate,
    exact: true,
    path: '/emailTemplate'
  },
  {
    component: EmailTemplate,
    exact: true,
    path: '/emailTemplate/:id'
  },
  {
    component: EmailTemplateList,
    exact: true,
    path: '/emailTemplateList'
  },
  {
    component: NoMatch,
    subject: 'No Match'
  }
];

export class LoggedInRoutes extends React.Component {
  public render() {
    // const routes = [
    //   {
    //     component: Home,
    //     exact: true,
    //     path: '/'
    //   },
    //   {
    //     component: FormSchemaList,
    //     path: '/formschemalist'
    //   },
    //   {
    //     component: Admin,
    //     path: '/rolespermissions',
    //     subject: 'admin'
    //   },
    //   {
    //     component: FormBuilder,
    //     exact: true,
    //     path: '/formBuilder'
    //   },
    //   {
    //     component: FormBuilder,
    //     path: '/formBuilder/:id'
    //   },
    //   {
    //     component: FormRenderer,
    //     exact: true,
    //     path: '/formRenderer/:id/:pageType'
    //   },
    //   {
    //     component: FormRenderer,
    //     exact: true,
    //     path: '/formRenderer/:id/:submissionId/:pageType'
    //   },
    //   {
    //     component: FormTrigger,
    //     exact: true,
    //     path: '/formTrigger/:id'
    //   },
    //   {
    //     component: FormTrigger,
    //     exact: true,
    //     path: '/formTrigger/:id/:triggerId'
    //   },
    //   {
    //     component: FormDataList,
    //     exact: true,
    //     path: '/formdatalist/:formName/:formId'
    //   },
    //   {
    //     component: FormTriggerList,
    //     exact: true,
    //     path: '/formTriggerList/:formId'
    //   },
    //   {
    //     component: AppForm,
    //     exact: true,
    //     path: '/appforms/:id',
    //     subject: 'appforms'
    //   },
    //   {
    //     component: DynamicTableRender,
    //     exact: true,
    //     path: '/dynamicTable'
    //   },
    //   {
    //     component: Users,
    //     exact: true,
    //     path: '/users'
    //   },
    //   {
    //     component: GraphiQlList,
    //     exact: true,
    //     path: '/graphiQlList'
    //   },
    //   {
    //     component: GraphiQl,
    //     exact: true,
    //     path: '/graphiQl'
    //   },
    //   {
    //     component: GraphiQl,
    //     exact: true,
    //     path: '/graphiQl/:id'
    //   },
    //   {
    //     component: EmailTemplate,
    //     exact: true,
    //     path: '/emailTemplate'
    //   },
    //   {
    //     component: EmailTemplate,
    //     exact: true,
    //     path: '/emailTemplate/:id'
    //   },
    //   {
    //     component: EmailTemplateList,
    //     exact: true,
    //     path: '/emailTemplateList'
    //   },
    //   {
    //     component: NoMatch,
    //     subject: 'No Match'
    //   }
    // ];
    return (
      <Can I="read" a="default">
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route key={index}
                exact={route.exact}
                path={route.path}
                render={(routeProps) => {
                  const SubjectComponent: any = route.subject ? (ability.can('read', route.subject) ? route.component : NoMatch) : route.component;
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

