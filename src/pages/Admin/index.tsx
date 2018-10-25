import * as React from 'react';
import {
  LocalizeContextProps,
  withLocalize
} from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { fetchConfigRequest } from '../../actions/config';
import { fetchOrganizationListRequest } from '../../actions/organization';
import { fetchRoleListRequest } from '../../actions/role';
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';

import { createRolePermissionRequest, fetchRolePermissionRequest } from 'src/actions/rolepermission';
import Table, { ITableState } from 'src/components/Table';
import { IOrganization } from 'src/reducers/organization';
import { IRole } from 'src/reducers/role';
import { IRolePermissionReducer } from 'src/reducers/rolepermission';
import './admin.css';

interface IAdminProps extends LocalizeContextProps, IStateProps, IDispatchProps { }

interface IAdminState {
  categoryName: string;
  columns: Column[];
  currentPage: number;
  length: number;
  canActions: string[];
  cannotActions: string[];
  availablePermissions: any;
}

class Admin extends React.Component<IAdminProps, IAdminState> {
  public columns: Column[];
  constructor(props: IAdminProps) {
    super(props);
    const canActions = [
      'can',
      'cannot',
      'createdBy'
    ];
    const cannotActions = [
      'cannot',
      'createdBy'
    ];
    this.state = {
      availablePermissions: {
        create: canActions,
        delete: canActions,
        read: canActions,
        update: canActions
      },
      canActions,
      cannotActions,
      categoryName: '',
      columns: [
        (new Column()).withKey('name').withLabel('Roles'),
        (new Column()).withKey('permission.create.action').withLabel('CREATE').withCellFormatter((cell: any, row: any) => (
          <div>
            {row.permission.create && <select className="form-control" defaultValue={row.permission.create.action} onChange={(e) => {
              this.validatePermission('create', row, e.target.value);
            }}>
              {row.permission.availablePermissions.create.map((permission: any, i: string | number) => <option key={i} value={permission}>{permission}</option>)}
            </select>}
          </div>
        )),
        (new Column()).withKey('permission.read.action').withLabel('READ').withCellFormatter((cell: any, row: any) => (
          <div>
            {row.permission.read && <select className="form-control" defaultValue={row.permission.read.action} onChange={(e) => {
              this.validatePermission('read', row, e.target.value);
            }}>
              {row.permission.availablePermissions.read.map((permission: any, i: string | number) => <option key={i} value={permission}>{permission}</option>)}
            </select>}
          </div>
        )),
        (new Column()).withKey('permission.update.action').withLabel('UPDATE').withCellFormatter((cell: any, row: any) => (
          <div>
            {row.permission.update && <select className="form-control" defaultValue={row.permission.update.action} onChange={(e) => {
              this.validatePermission('update', row, e.target.value);
            }}>
              {row.permission.availablePermissions.update.map((permission: any, i: string | number) => <option key={i} value={permission}>{permission}</option>)}
            </select>}
          </div>
        )),
        (new Column()).withKey('permission.delete.action').withLabel('DELETE').withCellFormatter((cell: any, row: any) => (
          <div>
            {row.permission.delete && <select className="form-control" defaultValue={row.permission.delete.action} onChange={(e) => {
              this.validatePermission('delete', row, e.target.value);
            }}>
              {row.permission.availablePermissions.delete.map((permission: any, i: string | number) => <option key={i} value={permission}>{permission}</option>)}
            </select>}
          </div>
        ))
      ],
      currentPage: 1,
      length: 10
    };
  }

  public componentDidMount() {
    this.props.fetchOrganizationList(10, 1);
  }

  public validatePermission = (type: string, row: any, selectedAction: string) => {
    row.permission[type].action = selectedAction;
    switch (type) {
      case 'read':
        break;
      case 'create':
        const permissions = ['update', 'delete'];
        switch (selectedAction) {
          case 'can':
            this.assignActions(row.permission, permissions, this.state.canActions);
            break;
          case 'cannot':
            this.assignActions(row.permission, permissions, this.state.cannotActions);
            break;
          case 'createdBy':
            row.permission.update.action = 'createdBy';
            this.assignActions(row.permission, permissions, ['createdBy']);
            break;
        }
        break;
      case 'update':
        break;
      case 'delete':
        break;

      default:
        break;
    }
  }

  public assignActions(rolePermission: any, permissions: string[], actions: string[]) {
    permissions.forEach((permission: string) => {
      rolePermission[permission].action = actions[0];
      rolePermission.availablePermissions[permission] = actions;
    });
    this.setState((prevState) => ({
      categoryName: prevState.categoryName
    }));
  }

  public getConfigList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tenant = e.target.value;
    this.props.rolePermission.tenant = tenant;
    this.props.fetchConfigList('registeredModels,permissionCategory,permissionTable', tenant);
  }

  public getRolePermission = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const model = e.target.value;
    if (model) {
      this.props.fetchRolePermission(this.props.rolePermission.tenant, model);
    }
  }

  public saveRolePermission = () => {
    const { rolePermission } = this.props;
    rolePermission.permissions.forEach((permission: any) => {
      delete permission.permission.availablePermissions;
    });
    delete rolePermission.loading;
    this.props.createRolePermission(rolePermission, rolePermission.tenant, rolePermission.model);
  }

  public render() {
    const { organizations, models, categories, rolePermission } = this.props;
    const { categoryName, length, currentPage, columns } = this.state;
    rolePermission.permissions.forEach((permission: any) => {
      if (!permission.permission || !Object.keys(permission.permission).length) {
        permission.permission = {
          availablePermissions: {
            ...this.state.availablePermissions
          },
          create: {
            action: 'cannot'
          },
          delete: {
            action: 'cannot'
          },
          read: {
            action: 'cannot'
          },
          update: {
            action: 'cannot'
          }
        };
      }
    });
    return (
      <div className="adminContainer" >
        <div className="row">
          <div className="col-md-offset-1 col-md-2">
            <h4>Organization</h4>
          </div>
          <div className="col-md-6">
            <select className="form-control" defaultValue={rolePermission.tenant} onChange={(e) => this.getConfigList(e)}>
              <option value="">SELECT ORGANIZATION</option>
              {organizations.map((org, i) => <option key={i} value={org._id}>{org.name}</option>)}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-1 col-md-2">
            <h4>Category</h4>
          </div>
          <div className="col-md-3">
            <select className="form-control" defaultValue={categoryName}>
              <option value="">SELECT CATEGORY</option>
              {categories.map((category, i) => <option key={i}>{category}</option>)}
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-control" defaultValue={rolePermission.model} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.getRolePermission(e)}>
              <option value="">SELECT MODEL</option>
              {models.map((model, i) => <option key={i}>{model}</option>)}
            </select>
          </div>
        </div>
        <div className="row">
          <button className="btn btn-primary pull-right" onClick={() => this.saveRolePermission()}>Save</button>
        </div>
        <Table
          keyField="admin"
          data={rolePermission.permissions}
          columns={columns}
          loading={false}
          length={length}
          currentPage={currentPage}
          total={rolePermission.permissions.length}
          onUpdate={(nextState: ITableState) => {
            const { page, sizePerPage } = nextState;
            // tslint:disable-next-line:no-console
            console.log(page, sizePerPage);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  categories: state.config.categories,
  configLoading: state.config.loading,
  models: state.config.models,
  organizationLoading: state.organization.list.loading,
  organizations: state.organization.list.data,
  permissionList: state.config.permissionList,
  roleLoading: state.role.list.loading,
  rolePermission: state.rolePermission,
  rolePermissionLoading: state.rolePermission.loading,
  roles: state.role.list.data
});

const mapDispatchToProps = (dispatch: any) => ({
  createRolePermission: (rolePermission: IRolePermissionReducer, tenantId: string, modelName: string) => dispatch(createRolePermissionRequest(rolePermission, tenantId, modelName)),
  fetchConfigList: (configList: string, tenantId: string) => dispatch(fetchConfigRequest(configList, tenantId)),
  fetchOrganizationList: (limit: number, currentPage: number) => dispatch(fetchOrganizationListRequest(limit, currentPage)),
  fetchRoleList: (tenantId: string, limit: number, currentPage: number) => dispatch(fetchRoleListRequest(tenantId, limit, currentPage)),
  fetchRolePermission: (tenantId: string, modelName: string) => dispatch(fetchRolePermissionRequest(tenantId, modelName))
});

interface IStateProps {
  organizations: IOrganization[];
  roles: IRole[];
  models: string[];
  categories: string[];
  permissionList: any;
  configLoading: boolean;
  organizationLoading: boolean;
  roleLoading: boolean;
  rolePermission: IRolePermissionReducer;
  rolePermissionLoading: boolean;
}

interface IDispatchProps {
  fetchConfigList: (configList: string, tenantId: string) => any;
  fetchOrganizationList: (limit: number, currentPage: number) => any;
  fetchRoleList: (tenantId: string, limit: number, currentPage: number) => any;
  fetchRolePermission: (tenantId: string, modelName: string) => any;
  createRolePermission: (rolePermission: IRolePermissionReducer, tenantId: string, modelName: string) => any;
}

export default compose(
  withRouter,
  connect<IStateProps, IDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLocalize
)(Admin);
