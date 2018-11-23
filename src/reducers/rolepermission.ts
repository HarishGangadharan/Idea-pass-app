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
  subject: string;
  tenant_id: string;
  permissions: IPermission[];
  loading: boolean;
}

const rolePermissionInitialState: IRolePermissionReducer = {
  loading: false,
  permissions: [],
  subject: '',
  tenant_id: ''
};

const rolePermissionReducer = (state: IRolePermissionReducer = rolePermissionInitialState, action: IActionProps): IRolePermissionReducer => {
  switch (action.type) {
    case Constants.CREATE_ROLE_PERMISSION_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.CREATE_ROLE_PERMISSION_SUCCESS:
      return {
        ...action.payload,
        loading: false
      };
    case Constants.CREATE_ROLE_PERMISSION_FAILURE:
      return rolePermissionInitialState;
    case Constants.UPDATE_ROLE_PERMISSION_STATE:
      return {
        ...state,
        loading: false,
        permissions: state.permissions.map(permission => {
          if (permission._id === action.row._id) {
            return action.row;
          } else {
            return permission;
          }
        })
      };
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
