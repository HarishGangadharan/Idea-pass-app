import { IActionProps } from '.';
import Constants from '../actions/rolepermission/constants';

interface IPermission {
  _id?: string,
  name: string,
  permission: {
    create: {
      action: string
    },
    delete: {
      action: string
    },
    update: {
      action: string
    },
    read: {
      action: string
    }
  }
}

interface IRolePermissionReducer {
  model: string;
  tenant: string;
  permissions: IPermission[];
  loading: boolean;
}

const rolePermissionInitialState: IRolePermissionReducer = {
  loading: false,
  model: '',
  permissions: [],
  tenant: ''
};

const rolePermissionReducer = (state: IRolePermissionReducer = rolePermissionInitialState, action: IActionProps): IRolePermissionReducer => {
  switch (action.type) {
    case Constants.CREATE_ROLE_PERMISSION_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.CREATE_ROLE_PERMISSION_SUCCESS:
      return rolePermissionInitialState;
    case Constants.CREATE_ROLE_PERMISSION_FAILURE:
      return rolePermissionInitialState;
    case Constants.FETCH_ROLE_PERMISSION_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.FETCH_ROLE_PERMISSION_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    case Constants.FETCH_ROLE_PERMISSION_FAILURE:
      return rolePermissionInitialState;
    default:
      return state;
  }
};

export { rolePermissionReducer, IRolePermissionReducer, IPermission };
