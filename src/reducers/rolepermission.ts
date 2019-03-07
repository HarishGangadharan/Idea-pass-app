import { IActionProps } from '.';
import Constants from '../actions/rolepermission/constants';

export interface IPermission {
  role_id?: string,
  name: string,
  permission: {
    create: {
      action: string
    },
    delete: {
      action: string
    },
    manage: {
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

export interface IRolePermissionReducer {
  subject: string;
  tenant_id: string;
  permissions: IPermission[];
  isSaveDisabled: boolean;
  loading: boolean;
  updatedPermissions: any[]
}

const rolePermissionInitialState: IRolePermissionReducer = {
  isSaveDisabled: true,
  loading: false,
  permissions: [],
  subject: '',
  tenant_id: '',
  updatedPermissions: []
};

export const rolePermissionReducer = (state: IRolePermissionReducer = rolePermissionInitialState, action: IActionProps): IRolePermissionReducer => {
  switch (action.type) {
    case Constants.CREATE_ROLE_PERMISSION_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.CREATE_ROLE_PERMISSION_SUCCESS:
      return {
        ...action.payload,
        isSaveDisabled: true,
        loading: false,
        updatedPermissions: []
      };
    case Constants.CREATE_ROLE_PERMISSION_FAILURE:
      return rolePermissionInitialState;
    case Constants.UPDATE_ROLE_PERMISSION_STATE:
      return {
        ...state,
        isSaveDisabled: false,
        loading: false,
        permissions: state.permissions.map(permission => {
          if (permission.role_id === action.row.role_id) {
            return action.row;
          } else {
            return permission;
          }
        }),
        updatedPermissions: action.updatedPermissions
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
    case Constants.RESET_ROLE_PERMISSION:
      return {...rolePermissionInitialState};
    case Constants.UPDATE_MANAGE_STATE:
      return {
        ...state,
        isSaveDisabled: false,
        loading: false
      };
    case Constants.RESET_PERMISSION_STATE:
      return {
        ...rolePermissionInitialState,
        tenant_id: ''
      };
    default:
      return state;
  }
};
