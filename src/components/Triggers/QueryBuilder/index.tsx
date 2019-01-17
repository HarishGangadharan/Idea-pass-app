import * as React from 'react';
// import { Translate } from 'react-localize-redux';
import QueryBuilder, { Rule, RuleGroup, ValueEditorCustomControlProps } from 'react-querybuilder';
import './style.css';

interface IEditorProps {
  type?: string;
}

interface ICustomRules {
  [key: string]: string | number | boolean;
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

interface IEditorProps {
  type?: string;
}

interface IOperator {
  name: string;
  label: string;
}

interface IQueryBuilderProps {
  fields: any[];
  targetFields: any[];
  operators?: IOperator[]
  disableGroupAction?: boolean;
  disableCombinators?: boolean;
  disableOperators?: boolean;
  query: any;
  showQuery?: boolean;
  customRules?: ICustomRules;
  onQueryChange: (query: any) => any;
}

interface IValidatorProps extends ValueEditorCustomControlProps {
  isOldValue?: boolean;
  customValue?: string;
  handleOnChange(value: any): void;
}

interface IRemoveActionProps {
  label: string;
  className: string;
  handleOnClick: () => void;
  level: number;
}

class QueryBuilderContainer extends React.Component<IQueryBuilderProps> {
  /*
   * Doc => https://www.npmjs.com/package/react-querybuilder
   * */
  public controlElements: any = {
    /*
     * addRuleAction: {},
     * fieldSelector: {},
     * operatorSelector: {},
     * removeGroupAction: {},
     * removeRuleAction: {
     * },
     */
    addGroupAction: () => <span />,
    combinatorSelector: () => <span />,
    removeGroupAction: this.removeEditor({ type: 'group' }),
    removeRuleAction: this.removeEditor({ type: 'rule' }),
    valueEditor: this.customValueEditor()
  };

  constructor(props: IQueryBuilderProps) {
    super(props);
    if (!props.disableGroupAction) {
      delete this.controlElements.addGroupAction;
    }
    if (!props.disableCombinators) {
      delete this.controlElements.combinatorSelector;
    }
  }

  public onCustomFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    rule: IValidatorProps,
    fieldName: string
  ) => {
    event.persist();
    const targetRule = this.findRule(rule.id, this.props.query);
    if (event.target.type === 'checkbox') {
      Object.assign(targetRule, { [fieldName]: event.target.checked });
    } else {
      Object.assign(targetRule, { [fieldName]: event.target.value });
    }
    this.props.onQueryChange(this.props.query);
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

  public customValueEditor() {
    const { customRules } = this.props;
    return (props: IValidatorProps) => {
      return (
        <span className={props.level.toString()}>
          <select
            value={props.value}
            onChange={e => props.handleOnChange(e.target.value)}
            className="rule-fields"
            title="Fields"
          >
            {this.props.targetFields.map((targetField, index) => (<option key={index} value={targetField.value}>{targetField.label}</option>))}
          </select>
          &nbsp;
          {customRules && <span>
            {customRules.hasOwnProperty('isOldValue') && <div className="checkbox">
              <label style={{ fontSize: '1em' }}>
                <input
                  type="checkbox"
                  checked={props.isOldValue}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    this.onCustomFieldChange(event, props, 'isOldValue')
                  }
                />
                Is Oldvalue
            </label>
            </div>}
            {customRules.hasOwnProperty('customValue') && <div className="show-inline">
              <label htmlFor="customValue">Custom Value</label>
              <input type="text" defaultValue={props.customValue} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                this.onCustomFieldChange(event, props, 'customValue');
              }}/>
            </div>}
          </span>}
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
          fields={this.props.fields}
          customRules={this.props.customRules || {}}
          controlElements={this.controlElements}
          operators={this.props.operators}
          controlClassnames={{
            addGroup: 'rule-btn',
            addRule: 'rule-btn',
            combinators: 'rule-combinator',
            fields: '',
            operators: '',
            queryBuilder: '',
            removeGroup: 'pl-3',
            removeRule: 'pl-3',
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
          query={this.props.query}
          onQueryChange={this.props.onQueryChange}
        />
        {this.props.showQuery && <div className="shrink query-log scroll">
          <h4>Query</h4>
          <pre>{JSON.stringify(this.props.query, null, 2)}</pre>
        </div>}
      </div>
    );
  }
}

export default QueryBuilderContainer;

