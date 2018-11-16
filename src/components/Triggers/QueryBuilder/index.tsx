import * as React from 'react';
// import { Translate } from 'react-localize-redux';
import QueryBuilder, { Rule, RuleGroup, ValueEditorCustomControlProps } from 'react-querybuilder';
import './style.css';

interface IEditorProps {
  type?: string;
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
  disableOldValue?: boolean;
  disableGroupAction?: boolean;
  disableCombinators?: boolean;
  disableOperators?: boolean;
  query: any;
  showQuery? : boolean;
  onQueryChange: (query: any) => any;
}

interface IValidatorProps extends ValueEditorCustomControlProps {
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
  public controlElements = {
    /*
     * addRuleAction: {},
     * fieldSelector: {},
     * operatorSelector: {},
     * removeGroupAction: {},
     * removeRuleAction: {
     * },
     */
    addGroupAction: () => (<span>&nbsp;</span>),
    combinatorSelector: () => (<span>&nbsp;</span>),
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

  public onOldValueSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    rule: IValidatorProps
  ) => {
    event.persist();
    const targetRule  = this.findRule(rule.id, this.props.query);
    Object.assign(targetRule.customRules, {isOldValue: event.target.checked});
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
    return (props: IValidatorProps) => {
      return (
        <span>
          <select
            value={props.value}
            onChange={e => props.handleOnChange(e.target.value)}
            className="rule-fields"
            title="Fields"
          >
            {this.props.targetFields.map((targetField, index) => (<option key={index} value={targetField.value}>{targetField.label}</option>))}
          </select>
          &nbsp;
          {props.customRules && !this.props.disableOldValue && <span>
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
          customRules={{isOldValue: false}}
          controlElements={this.controlElements}
          operators={this.props.operators}
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
