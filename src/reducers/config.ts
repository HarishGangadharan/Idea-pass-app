import { IActionProps } from '.';
import Constants from '../actions/config/constants';

interface IConfigReducer {
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

const configReducer = (state: IConfigReducer = configInitialState, action: IActionProps): IConfigReducer => {
  switch (action.type) {
    case Constants.FETCH_CONFIG_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.FETCH_CONFIG_SUCCESS:
      return {
        ...state,
        categories: [...action.payload.permissionCategory],
        loading: false,
        models: [...action.payload.registeredModels],
        permissionList: {...action.payload.permissionTable}
      };
    case Constants.FETCH_CONFIG_FAILURE:
      return configInitialState;
    default:
      return state;
  }
};

export { configReducer, IConfigReducer };
