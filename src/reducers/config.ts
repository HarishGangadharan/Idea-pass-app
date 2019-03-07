import { IActionProps } from '.';
import Constants from '../actions/config/constants';

export interface IConfigReducer {
  categories: string[];
  models: string[];
  permissionList: any;
  loading: boolean;
}

const configInitialState: IConfigReducer = {
  categories: [],
  loading: false,
  models: [],
  permissionList: {}
};

export const configReducer = (state: IConfigReducer = configInitialState, action: IActionProps): IConfigReducer => {
  switch (action.type) {
    case Constants.FETCH_CONFIG_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.FETCH_CONFIG_SUCCESS:
      return {
        ...state,
        categories: action.payload.permissionCategory ? [...action.payload.permissionCategory] : [...state.categories],
        loading: false,
        models: action.payload.registeredModels ? [...action.payload.registeredModels] : state.models,
        permissionList: action.payload.permissionTable ? {...action.payload.permissionTable} : {...state.permissionList}
      };
    case Constants.FETCH_CONFIG_FAILURE:
      return configInitialState;
    default:
      return state;
  }
};
