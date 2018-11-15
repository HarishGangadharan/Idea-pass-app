import * as React from 'react';
import QueryBuilder , {
  Rule,
  RuleGroup,
  ValueEditorCustomControlProps
} from 'react-querybuilder';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { fetchQueryFieldsRequest } from '../../../actions/querybuilder';
import { AppProperties } from '../../../constants/application.properties';
import { IState } from '../../../reducers';
import storage from '../../../utils/storage';
import './style.css';

interface IEditorProps {
  type?: string;
}

interface IQueryBuilderProps extends IDispatchProps, IMapStateProps {
  fields: any[];
}

interface IQueryBuilderState {
  fields: any[];
  query: RuleGroup;
}

interface ICustomRules {
  [key: string]: string | number | boolean;
  isOldValue: boolean;
}

interface IValidatorProps extends ValueEditorCustomControlProps {
  customRules: ICustomRules;
  handleOnChange(value: any): void;
}

interface IRemoveActionProps {
  label: string;
  className: string;
  handleOnClick: () => void;
  level: number;
}

class QueryBuilderContainer extends React.Component<
  IQueryBuilderProps,
  IQueryBuilderState
> {
  /*
   * Doc => https://www.npmjs.com/package/react-querybuilder
   * */
  public controlElements = {
    /*
     * addRuleAction: {},
     * combinatorSelector: {},
     * fieldSelector: {},
     * operatorSelector: {},
     * removeGroupAction: {},
     * removeRuleAction: {
     * },
     */
    removeGroupAction: this.removeEditor({ type: 'group' }),
    removeRuleAction: this.removeEditor({ type: 'rule' }),
    valueEditor: this.customValueEditor()
  };

  constructor(props: IQueryBuilderProps) {
    super(props);
    this.state = {
      fields: [
        { name: 'firstName', label: 'First Name' },
        { name: 'lastName', label: 'Last Name' },
        { name: 'age', label: 'Age' },
        { name: 'address', label: 'Address' },
        { name: 'phone', label: 'Phone' },
        { name: 'email', label: 'Email' },
        { name: 'twitter', label: 'Twitter' },
        { name: 'isDev', label: 'Is a Developer?', value: false }
      ],
      query: {
        combinator: 'and',
        id: 'g-e4af2c13-a801-46dc-8e0c-bef3fde396be',
        rules: [
          {
            customRules: {
              isOldValue: false
            },
            field: 'firstName',
            id: 'r-8b2f0dbf-47a7-422c-bf26-aa4f281ee1ee',
            operator: 'null',
            value: 'firstName'
          }
        ]
      }
    };
  }

  public componentDidMount() {
    this.fetchQueryFields();
  }

  public isRuleGroup(rule: RuleGroup | Rule) {
    return !!(rule.combinator && rule.rules);
  }

  public findRule(id: string, parent: RuleGroup | Rule): any {
    if (parent.id === id) {
      return parent;
    }
    if (parent.rules) {
      for (const rule of parent.rules) {
        if (rule.id === id) {
          return rule;
        } else if (this.isRuleGroup(rule)) {
          const subRule = this.findRule(id, rule);
          if (subRule) {
            return subRule;
          }
        }
      }
    }
  }

  public logQuery = (query: any) => {
    this.setState({ query });
  }

  public onOldValueSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    rule: IValidatorProps
  ) => {
    event.persist();
    const targetRule  = this.findRule(rule.id, this.state.query);
    Object.assign(targetRule.customRules, {isOldValue: event.target.checked});
    this.setState({});
  }

  public customValueEditor() {
    return (props: IValidatorProps) => {
      // tslint:disable-next-line:no-console
      console.log('props', props.customRules.isOldValue);
      return (
        <span>
          <select
            value={props.value}
            onChange={e => props.handleOnChange(e.target.value)}
            className="rule-fields"
            title="Fields"
          >
            <option value="">Select</option>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="age">Age</option>
            <option value="address">Address</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="twitter">Twitter</option>
            <option value="isDev">Is a Developer?</option>
          </select>
          <input
            value={props.value}
            type="text"
            onChange={e => props.handleOnChange(e.target.value)}
          />
          <div className="checkbox">
            <label style={{ fontSize: '1em' }}>
              <input
                type="checkbox"
                checked={props.customRules.isOldValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  this.onOldValueSelect(event, props)
                }
              />
              Is Oldvalue
            </label>
          </div>
        </span>
      );
    };
  }

  public removeEditor(editorProps: IEditorProps) {
    return (props: IRemoveActionProps) => {
      return (
        <span
          className={`${props.className} fa fa-trash cursor-pointer`}
          title={`Delete ${editorProps.type}!`}
          onClick={props.handleOnClick}
        />
      );
    };
  }

  public render() {
    return (
      <div>
        <QueryBuilder
          fields={this.state.fields}
          controlElements={this.controlElements}
          customRules={{
            isOldValue: false
          }}
          controlClassnames={{
            addGroup: 'rule-btn',
            addRule: 'rule-btn',
            combinators: 'rule-combinator',
            fields: '',
            operators: '',
            queryBuilder: '',
            removeGroup: 'pl-10',
            removeRule: 'pl-10',
            rule: 'rule',
            ruleGroup: 'rule-group',
            value: ''
          }}
          translations={{
            addGroup: {
              label: '+ Group',
              title: 'Add group'
            },
            addRule: {
              label: '+ Rule',
              title: 'Add rule'
            },
            combinators: {
              title: 'combinators'
            },
            fields: {
              title: 'fields'
            },
            operators: {
              title: 'operators'
            },
            removeGroup: {
              label: '',
              title: 'removeGroup'
            },
            removeRule: {
              label: '',
              title: 'removeRule'
            },
            value: {
              title: 'value'
            }
          }}
          query={this.state.query}
          onQueryChange={this.logQuery}
        />
        <div className="shrink query-log scroll">
          <h4>Query</h4>
          <pre>{JSON.stringify(this.state.query, null, 2)}</pre>
        </div>
      </div>
    );
  }

  private fetchQueryFields = () => {
    const tenant = storage.getItem(AppProperties.TENANT);
    if (tenant) {
      // this.props.fetchQueryFields(tenant);
    }
  }
}

interface IDispatchProps {
  fetchQueryFields: (tenant: string) => void;
}

interface IMapStateProps {
  loading: boolean;
  fields: any[];
}

const mapStateTopProps = (state: IState) => ({
  fields: state.queryBuilder.fields,
  loading: state.queryBuilder.loading
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchQueryFields: (tenant: string) =>
    dispatch(fetchQueryFieldsRequest(tenant))
});

export default compose(
  withRouter,
  connect<IMapStateProps, IDispatchProps>(
    mapStateTopProps,
    mapDispatchToProps
  )
)(QueryBuilderContainer);
