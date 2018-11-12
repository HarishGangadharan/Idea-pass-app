import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { IPermission } from '../../reducers/rolepermission';

interface IRoleSelectorProps {
  rowData: any,
  rowIndex?: any,
  mode: string,
  handleChangeEvent: any,
  permissions: IPermission[]
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
      case 'update':
      switch (nextProps.permissions[nextProps.rowIndex].permission.create.action) {
        case 'can':
          return ({
            availablePermissions: [
              'can',
              'cannot',
              'createdBy'
            ]
          });
        case 'cannot':
        return ({
          availablePermissions: [
            'cannot',
            'createdBy'
          ]
        });
        case 'createdBy':
        return ({
          availablePermissions: [
            'createdBy'
          ]
        });
        default:
        return null;
      }
      case 'delete':
      switch (nextProps.permissions[nextProps.rowIndex] .permission.create.action) {
        case 'can':
          return ({
            availablePermissions: [
              'can',
              'cannot',
              'createdBy'
            ]
          });
        case 'cannot':
        return ({
          availablePermissions: [
            'cannot',
            'createdBy'
          ]
        });
        case 'createdBy':
        return ({
          availablePermissions: [
            'createdBy'
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
      availablePermissions: [
        'can',
        'cannot',
        'createdBy'
      ]
    };
  }

  public render() {
    const { rowData, mode, rowIndex } = this.props;
    const { availablePermissions } = this.state;
    return (
      <div>
        {rowData.permission[mode] && <select className="form-control"
        value={rowData.permission[mode].action}
        onChange={(e) => this.onChange(e, rowData, rowIndex)}>
          {availablePermissions
            .map((permission: any, i: string | number) =>
            <option key={i} value={permission}>{permission}</option>)}
        </select>}
      </div>
    );
  }

  private onChange = (e: any, row: IPermission, rowIndex: number) => {
    const data = this.props.permissions[rowIndex];
    const newPermissions = {
      _id: data._id,
      name: data.name,
      permission: Object.assign({}, data.permission, {
        [this.props.mode]: {
          action: e.target.value
        }
      }, this.props.mode === 'create' ? {
        delete: {
          action: e.target.value
        },
        update: {
          action: e.target.value
        }
      } : {})
    };
    this.props.handleChangeEvent(newPermissions);
  }
}

const mapStateToProps = (state: IState) => ({
  permissions: state.rolePermission.permissions
});

export default connect(mapStateToProps)(RoleSelector);
