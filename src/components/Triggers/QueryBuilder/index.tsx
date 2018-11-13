import * as React from 'react';
// import { Translate } from 'react-localize-redux';
import QueryBuilder from 'react-querybuilder';
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

interface IFieldIndexKeys {
  indexOfInnerRule: number;
  indexOfRule: number;
}
interface IQueryBuilderProps extends IDispatchProps, IMapStateProps {
  fields: any[];
}

interface IQueryBuilderState {
  fields: any[];
  query: IRuleGroup;
}

interface IValidatorProps {
  field?: string;
  operator?: string;
  value?: string;
  className: string;
  level: number;
  handleOnChange(value: any): void;
}

interface IRule {
  id: string;
  field: string;
  rules?: IRule[];
  operator: string;
  isOldValue?: boolean;
  value: string | number;
}

interface IRuleGroup {
  id: string;
  combinator: string;
  field?: string;
  isOldValue?: boolean;
  rules: Array<IRule | IRuleGroup>;
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
            field: 'firstName',
            id: 'r-8b2f0dbf-47a7-422c-bf26-aa4f281ee1ee',
            isOldValue: false,
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

  public logQuery = (query: any) => {
    this.setState({ query });
  }

  public onOldValueSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    findFieldIndexKeys: IFieldIndexKeys
  ) => {
    event.persist();
    this.setFieldValueByKeys(
      'isOldValue',
      findFieldIndexKeys,
      event.target.checked
    );
    this.setState({});
  }

  public setFieldValueByKeys = (
    key: string,
    findFieldIndexKeys: IFieldIndexKeys,
    value: string | number | boolean
  ) => {
    let field = this.state.query.rules[findFieldIndexKeys.indexOfRule];
    if (findFieldIndexKeys.indexOfInnerRule !== -1 && field.rules) {
      field = field.rules[findFieldIndexKeys.indexOfInnerRule];
    }
    return (field[key] = value);
  }

  public getFieldByRuleProp = (
    props: IValidatorProps,
    findFieldIndexKeys: IFieldIndexKeys
  ): IRule | IRuleGroup => {
    this.state.query.rules.forEach((rule: IRule, index: number) => {
      if (rule.rules && rule.rules.length > 0) {
        rule.rules = rule.rules.map(
          (innerRule: IRule, innerRuleIndex: number): IRule => {
            const isMatch =
              innerRule.field === props.field &&
              innerRule.operator === props.operator &&
              innerRule.value === props.value;
            if (isMatch) {
              findFieldIndexKeys.indexOfRule = index;
              findFieldIndexKeys.indexOfInnerRule = innerRuleIndex;
            }
            return innerRule;
          }
        );
      } else {
        const isMatch =
          rule.field === props.field &&
          rule.operator === props.operator &&
          rule.value === props.value;
        if (isMatch) {
          findFieldIndexKeys.indexOfRule = index;
        }
      }
    });
    return this.getFieldByKeys(findFieldIndexKeys);
  }

  public getFieldByKeys = (
    findFieldIndexKeys: IFieldIndexKeys
  ): IRule | IRuleGroup => {
    let field = this.state.query.rules[findFieldIndexKeys.indexOfRule];
    if (findFieldIndexKeys.indexOfInnerRule !== -1 && field.rules) {
      field = field.rules[findFieldIndexKeys.indexOfInnerRule];
    }
    return field;
  }

  public customValueEditor() {
    return (props: IValidatorProps) => {
      const findFieldIndexKeys: IFieldIndexKeys = {
        indexOfInnerRule: -1,
        indexOfRule: -1
      };
      const field = this.getFieldByRuleProp(props, findFieldIndexKeys);
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
                checked={field ? field.isOldValue : false}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  this.onOldValueSelect(event, findFieldIndexKeys)
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
