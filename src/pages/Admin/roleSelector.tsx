import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { IPermission } from '../../reducers/rolepermission';

import _ from 'lodash';

const permissions = [
  'can',
  'cannot',
  'created_by'
];

interface IRoleSelectorProps {
  rowData: any,
  rowIndex?: any,
  mode: string,
  handleChangeEvent: any,
  permissions: IPermission[],
  updatedPermissions: any[]
}

interface IRoleSelectorState {
  availablePermissions: string[]
}

class RoleSelector extends React.Component<IRoleSelectorProps, IRoleSelectorState> {
  public static getDerivedStateFromProps(nextProps: IRoleSelectorProps, nextState: IRoleSelectorState) {
    switch (nextProps.mode) {
      case 'read':
      return null;
      case 'create':
        return null;
      case 'manage':
        return null;
      case 'update':
      switch (nextProps.permissions[nextProps.rowIndex].permission.create.action) {
        case 'can':
          return ({
            availablePermissions: permissions
          });
        case 'cannot':
        return ({
          availablePermissions: [
            'cannot',
            'created_by'
          ]
        });
        case 'created_by':
        return ({
          availablePermissions: [
            'created_by'
          ]
        });
        default:
        return null;
      }
      case 'delete':
      switch (nextProps.permissions[nextProps.rowIndex].permission.create.action) {
        case 'can':
          return ({
            availablePermissions: permissions
          });
        case 'cannot':
        return ({
          availablePermissions: [
            'cannot',
            'created_by'
          ]
        });
        case 'created_by':
        return ({
          availablePermissions: [
            'created_by'
          ]
        });
        default:
        return null;
      }
      default:
        return null;
    }
  }

  constructor(props: IRoleSelectorProps) {
    super(props);
    this.state = {
      availablePermissions: permissions
    };
  }

  public render() {
    const { rowData, mode, rowIndex } = this.props;
    const { availablePermissions } = this.state;
    const rule = rowData.permission[mode];
    return (
      <div>
        {rule &&
          <select className="form-control"
            value={rule.action}
            onChange={(e) => this.onChange(e, rowData, rowIndex)}
          >
          <option value="">SELECT RULE</option>
          {availablePermissions
            .map((permission: any, i: string | number) =>
              <option key={i} value={permission}>{permission}</option>)
          }
          </select>
        }
      </div>
    );
  }

  /**
   * Constructs permission object
   *
   * @param {string}
   * @param {any}
   * @param {string}
   *
   * @returns {object} with constructed permissions
   */
  private constructPermission = (value: string, data: any, mode: string) => {
    let ruleTypes: any[] = [];
    if (mode === 'create') {
      ruleTypes = ['delete', 'update'];
    }
    const permission = {
      [this.props.mode]: {
        ...data.permission[this.props.mode],
        action: value
      }
    };
    ruleTypes.forEach(type => {
      permission[type] = {
        ...data.permission[type],
        action: value
      };
    });
    return permission;
  }

  /**
   * Gets the updated permission from the users
   *
   * @param {string}
   * @param {any}
   * @param {any}
   * @param {string}
   * @param {any}
   *
   * @returns {Array} of permissions with respect to user roles
   */
  private getChangedPermissions = (value: string, data: any, updatedPermissions: any, mode: string, row: any) => {
    // @ts-ignore
    const index = _.findIndex(updatedPermissions, { role_id: row.role_id });
    if (index > -1) {
      if (mode === 'create') {
        updatedPermissions[index].permission = this.constructPermission(value, data, mode);
      } else {
        updatedPermissions[index].permission[mode] = {
          ...data.permission[mode],
          action: value
        };
      }
    } else {
      updatedPermissions.push({
        name: data.name,
        permission: (mode === 'create') ? this.constructPermission(value, data, mode) : {
          [mode]: {
            ...data.permission[mode],
            action: value
          }
        },
        role_id: row.role_id
      });
    }
    return updatedPermissions;
  }

  /**
   * Get the on change of dropdowns
   *
   * @param {any}
   * @param {IPermission}
   * @param {number}
   *
   */
  private onChange = (e : any, row: IPermission, rowIndex: number) => {
    const data = this.props.permissions[rowIndex];
    const { mode } = this.props;
    let { updatedPermissions } = this.props;
    updatedPermissions = this.getChangedPermissions(e.target.value, data, updatedPermissions, mode, row);
    const newPermissions = {
      name: data.name,
      permission: Object.assign({},
        data.permission, {
        [mode]: {
          ...data.permission[mode],
          action: e.target.value
        }
        }, (mode === 'create' || mode === 'manage') ? this.constructPermission(e.target.value, data, mode) : {}),
      role_id: row.role_id
    };
    const clonedObj = _.cloneDeep(updatedPermissions);
    _.merge(clonedObj, newPermissions.permission);
    this.props.handleChangeEvent(newPermissions, updatedPermissions);
  }
}

const mapStateToProps = (state: IState) => ({
  permissions: state.rolePermission.permissions,
  updatedPermissions: state.rolePermission.updatedPermissions
});

export default connect(mapStateToProps)(RoleSelector);
