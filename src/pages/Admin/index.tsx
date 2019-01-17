import * as React from 'react';
import {
  LocalizeContextProps,
  withLocalize
} from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { fetchConfigRequest } from '../../actions/config';
import { fetchOrganizationListRequest, fetchOrganizationRequest } from '../../actions/organization';
import { fetchRoleListRequest } from '../../actions/role';
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';
import CButton from '../../components/Button/CButton';

import { createRolePermissionRequest, fetchRolePermissionRequest, updateRolePermissionState } from '../../actions/rolepermission';
import Table, { ITableState } from '../../components/Table';
import { AppProperties } from '../../constants/application.properties';
import { IOrganization } from '../../reducers/organization';
import { IRole } from '../../reducers/role';
import { IPermission, IRolePermissionReducer } from '../../reducers/rolepermission';
import storage from '../../utils/storage';
import './admin.css';
import RoleSelector from './roleSelector';

import _ from 'lodash';

interface IAdminProps extends LocalizeContextProps, IStateProps, IDispatchProps { }

interface IAdminState {
  categoryName: string;
  columns: Column[];
  currentPage: number;
  length: number;
  tenantAdmin: boolean;
}

class Admin extends React.Component<IAdminProps, IAdminState> {
  constructor(props: IAdminProps) {
    super(props);
    this.state = {
      categoryName: '',
      columns: [
        (new Column()).withKey('name').withLabel('Roles'),
        (new Column()).withKey('permission.create.action').withLabel('CREATE').withCellFormatter((cell: any, row: any, rowIndex: number) => (
          <RoleSelector mode="create" rowData={row} rowIndex={rowIndex} handleChangeEvent={this.handleChangeEvent} />
        )),
        (new Column()).withKey('permission.read.action').withLabel('READ').withCellFormatter((cell: any, row: any, rowIndex: number) => (
          <RoleSelector mode="read" rowData={row} rowIndex={rowIndex} handleChangeEvent={this.handleChangeEvent} />
        )),
        (new Column()).withKey('permission.update.action').withLabel('UPDATE').withCellFormatter((cell: any, row: any, rowIndex: number) => (
          <RoleSelector mode="update" rowData={row} rowIndex={rowIndex} handleChangeEvent={this.handleChangeEvent} />
        )),
        (new Column()).withKey('permission.delete.action').withLabel('DELETE').withCellFormatter((cell: any, row: any, rowIndex: number) => (
          <RoleSelector mode="delete" rowData={row} rowIndex={rowIndex} handleChangeEvent={this.handleChangeEvent} />
        ))
      ],
      currentPage: 1,
      length: 10,
      tenantAdmin: false
    };
  }

  public componentDidMount() {
    const tenant = storage.getItem(AppProperties.TENANT);
    if (tenant) {
      this.props.rolePermission.tenant_id = tenant;
      this.props.fetchOrganizationRequest(tenant);
      this.props.fetchConfigList('registeredModels,permissionCategory,permissionTable', tenant);
      this.setState({tenantAdmin: true});
    } else {
      this.props.rolePermission.tenant_id = '';
      this.props.fetchOrganizationList(10, 1);
    }
  }

  public handleChangeEvent = (newPermission: IPermission, updatedPermissions: []) => {
    this.props.updateRolePermissionState(newPermission, updatedPermissions);
  }

  public getConfigList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tenant = e.target.value;
    this.props.rolePermission.tenant_id = tenant;
    this.props.fetchConfigList('registeredModels,permissionCategory,permissionTable', tenant);
  }

  public getRolePermission = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const model = e.target.value;
    if (model) {
      this.props.fetchRolePermission(this.props.rolePermission.tenant_id, model);
    }
  }

  public saveRolePermission = () => {
    const { rolePermission } = this.props;
    const permissions = rolePermission.updatedPermissions;
    if (permissions.length) {
      const updatedRolePermissions = _.cloneDeep(rolePermission);
      updatedRolePermissions.permissions = permissions;
      delete rolePermission.updatedPermissions;
      this.props.createRolePermission(updatedRolePermissions, rolePermission);
    }
  }

  public render() {
    const { organization, organizations, models, categories, rolePermission, saveDisabled } = this.props;
    const { categoryName, length, currentPage, columns, tenantAdmin } = this.state;
    return (
      <div className="shadow-container">
        <div className="row">
          <div className="col-md-offset-1 col-md-2">
            <h4>Organization</h4>
          </div>
          <div className="col-md-6">
            {tenantAdmin ?
              <select className="form-control" defaultValue={rolePermission.tenant_id} disabled={true}>
                <option value={organization._id}>{organization.name}</option>
              </select> :
              <select className="form-control upper-case" defaultValue={rolePermission.tenant_id} onChange={(e) => this.getConfigList(e)}>
                <option value="">SELECT ORGANIZATION</option>
                {organizations.map((org, i) => <option key={i} value={org._id}>{org.name}</option>)}
              </select>
            }
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-1 col-md-2">
            <h4>Category</h4>
          </div>
          <div className="col-md-3">
            <select className="form-control upper-case" defaultValue={categoryName}>
              <option value="">SELECT CATEGORY</option>
              {categories.map((category, i) => <option key={i}>{category}</option>)}
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-control upper-case" defaultValue={rolePermission.subject}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.getRolePermission(e)}>
              <option value="">SELECT MODEL</option>
              {models.map((model, i) => <option key={i}>{model}</option>)}
            </select>
          </div>
        </div>
        <div className="row">
          <CButton
            className="btn btn-primary pull-right"
            disabled={saveDisabled}
            onClick={() => this.saveRolePermission()}
            name="Save"
          />
        </div>
        <Table
          keyField="name"
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
  organization: state.organization.currentOrganization,
  organizationLoading: state.organization.currentOrganization.loading,
  organizations: state.organization.list.data,
  organizationsLoading: state.organization.list.loading,
  permissionList: state.config.permissionList,
  roleLoading: state.role.list.loading,
  rolePermission: state.rolePermission,
  rolePermissionLoading: state.rolePermission.loading,
  roles: state.role.list.data,
  saveDisabled: state.rolePermission.isSaveDisabled
});

const mapDispatchToProps = (dispatch: any) => ({
  createRolePermission: (updatedRolePermissions: IRolePermissionReducer, rolePermission: IRolePermissionReducer) => dispatch(createRolePermissionRequest(updatedRolePermissions, rolePermission)),
  fetchConfigList: (configList: string, tenantId: string) => dispatch(fetchConfigRequest(configList, tenantId)),
  fetchOrganizationList: (limit: number, currentPage: number) => dispatch(fetchOrganizationListRequest(limit, currentPage)),
  fetchOrganizationRequest: (tenantId: string) => dispatch(fetchOrganizationRequest(tenantId)),
  fetchRoleList: (tenantId: string, limit: number, currentPage: number) => dispatch(fetchRoleListRequest(tenantId, limit, currentPage)),
  fetchRolePermission: (tenantId: string, modelName: string) => dispatch(fetchRolePermissionRequest(tenantId, modelName)),
  updateRolePermissionState: (rolePermission: IPermission, updatedPermissions: []) => dispatch(updateRolePermissionState(rolePermission, updatedPermissions))
});

interface IStateProps {
  organizations: IOrganization[];
  organization: IOrganization;
  roles: IRole[];
  models: string[];
  categories: string[];
  permissionList: any;
  configLoading: boolean;
  organizationLoading: boolean;
  organizationsLoading: boolean;
  roleLoading: boolean;
  rolePermission: IRolePermissionReducer;
  rolePermissionLoading: boolean;
  saveDisabled: boolean;
}

interface IDispatchProps {
  fetchConfigList: (configList: string, tenantId: string) => void;
  fetchOrganizationList: (limit: number, currentPage: number) => void;
  fetchOrganizationRequest: (tenantId: string) => void;
  fetchRoleList: (tenantId: string, limit: number, currentPage: number) => void;
  fetchRolePermission: (tenantId: string, modelName: string) => void;
  updateRolePermissionState: (rolePermission: IPermission, updatedPermissions: []) => void;
  createRolePermission: (updatedRolePermissions: IRolePermissionReducer, rolePermission: IRolePermissionReducer) => void;
}

export default compose(
  withRouter,
  connect<IStateProps, IDispatchProps, IAdminProps, IState>(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLocalize
)(Admin);
