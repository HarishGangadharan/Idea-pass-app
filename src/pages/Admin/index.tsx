import * as React from 'react';
import {
  LocalizeContextProps,
  withLocalize
} from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { fetchModelListRequest } from '../../actions/model';
import { fetchOrganizationListRequest } from '../../actions/organization';
import { fetchRoleListRequest } from '../../actions/role';
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';

import { fetchRolePermissionRequest } from 'src/actions/rolepermission';
import Table, { ITableState } from 'src/components/Table';
import { IModel } from 'src/reducers/model';
import { IOrganization } from 'src/reducers/organization';
import { IRole } from 'src/reducers/role';
import { IPermission } from 'src/reducers/rolepermission';
import './admin.css';

interface IAdminProps extends LocalizeContextProps, IStateProps, IDispatchProps { }

interface IAdminState {
  tenantId: string;
  modelName: string;
  columns: Column[];
  currentPage: number;
  length: number;
}

class Admin extends React.Component<IAdminProps, IAdminState> {
  public columns: Column[];

  constructor(props: IAdminProps) {
    super(props);
    const permissionList = ['can', 'cannot', 'onlyme'];
    this.state = {
      columns: [
        (new Column()).withKey('name').withLabel('Roles'),
        (new Column()).withKey('permission.read.action').withLabel('READ').withCellFormatter((cell: any, row: any) => (
          <div>
            {row.permission.read && <select className="form-control" defaultValue={row.permission.read.action} onChange={(e) => {
              // tslint:disable-next-line:no-console
              console.log('select read', e.target.value);
            }}>
              {permissionList.map((permission, i) => <option key={i} value={permission}>{permission}</option>)}
            </select>}
          </div>
        )),
        (new Column()).withKey('permission.create.action').withLabel('CREATE').withCellFormatter((cell: any, row: any) => (
          <div>
            {row.permission.create && <select className="form-control" defaultValue={row.permission.create.action} onChange={(e) => {
              // tslint:disable-next-line:no-console
              console.log('select read', e.target.value);
            }}>
              {permissionList.map((permission, i) => <option key={i} value={permission}>{permission}</option>)}
            </select>}
          </div>
        )),
        (new Column()).withKey('permission.update.action').withLabel('UPDATE').withCellFormatter((cell: any, row: any) => (
          <div>
            {row.permission.update && <select className="form-control" defaultValue={row.permission.update.action} onChange={(e) => {
              // tslint:disable-next-line:no-console
              console.log('select read', cell, row, e.target.value);
            }}>
              {permissionList.map((permission, i) => <option key={i} value={permission}>{permission}</option>)}
            </select>}
          </div>
        )),
        (new Column()).withKey('permission.delete.action').withLabel('DELETE').withCellFormatter((cell: any, row: any) => (
          <div>
            {row.permission.delete && <select className="form-control" defaultValue={row.permission.delete.action} onChange={(e) => {
              // tslint:disable-next-line:no-console
              console.log('select read', e.target.value);
            }}>
              {permissionList.map((permission, i) => <option key={i} value={permission}>{permission}</option>)}
            </select>}
          </div>
        ))
      ],
      currentPage: 1,
      length: 10,
      modelName: '',
      tenantId: ''
    };
  }

  public componentDidMount() {
    this.props.fetchOrganizationList(10, 1);
  }

  public getModelList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tenant = e.target.value;
    this.setState({ tenantId: tenant });
    this.props.fetchModelList(tenant);
  }

  public getRolePermission = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const model = e.target.value;
    if (model) {
      this.setState({ modelName: model });
      this.props.fetchRolePermission(this.state.tenantId, model);
    }
  }

  public render() {
    const { organizations, models, rolePermissions } = this.props;
    const { tenantId, modelName, length, currentPage, columns } = this.state;
    return (
      <div className="adminContainer" >
        <div className="row">
          <div className="col-md-offset-1 col-md-2">
            <h4>Organization</h4>
          </div>
          <div className="col-md-6">
            <select className="form-control" defaultValue={tenantId} onChange={(e) => this.getModelList(e)}>
              <option value="">SELECT ORGANIZATION</option>
              {organizations.map((org, i) => <option key={i} value={org._id}>{org.name}</option>)}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-1 col-md-2">
            <h4>Models</h4>
          </div>
          <div className="col-md-6">
            <select className="form-control" defaultValue={modelName} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.getRolePermission(e)}>
              <option value="">SELECT MODEL</option>
              {models.map((model, i) => <option key={i}>{model}</option>)}
            </select>
          </div>
        </div>
        <Table
          keyField="admin"
          data={rolePermissions}
          columns={columns}
          loading={false}
          length={length}
          currentPage={currentPage}
          total={rolePermissions.length}
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
  modelLoading: state.model.list.loading,
  models: state.model.list.data,
  organizationLoading: state.organization.list.loading,
  organizations: state.organization.list.data,
  roleLoading: state.role.list.loading,
  rolePermissionLoading: state.rolePermission.loading,
  rolePermissions: state.rolePermission.permissions,
  roles: state.role.list.data
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchModelList: (tenantId: string) => dispatch(fetchModelListRequest(tenantId)),
  fetchOrganizationList: (limit: number, currentPage: number) => dispatch(fetchOrganizationListRequest(limit, currentPage)),
  fetchRoleList: (tenantId: string, limit: number, currentPage: number) => dispatch(fetchRoleListRequest(tenantId, limit, currentPage)),
  fetchRolePermission: (tenantId: string, modelName: string) => dispatch(fetchRolePermissionRequest(tenantId, modelName))
});

interface IStateProps {
  organizations: IOrganization[];
  roles: IRole[];
  models: IModel[];
  modelLoading: boolean;
  organizationLoading: boolean;
  roleLoading: boolean;
  rolePermissions: IPermission[];
  rolePermissionLoading: boolean;
}

interface IDispatchProps {
  fetchModelList: (tenantId: string) => any;
  fetchOrganizationList: (limit: number, currentPage: number) => any;
  fetchRoleList: (tenantId: string, limit: number, currentPage: number) => any;
  fetchRolePermission: (tenantId: string, modelName: string) => any;
}

export default compose(
  withRouter,
  connect<IStateProps, IDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLocalize
)(Admin);
