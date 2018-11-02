import { IActionProps } from '.';
import Constants from '../actions/appform/constants';

interface IAppFormReducer {
  data: any;
  loading: boolean;
}

const appFormInitialState: IAppFormReducer = {
  data: {},
  loading: false
};

const appFormReducer = (state: IAppFormReducer = appFormInitialState, action: IActionProps): IAppFormReducer => {
  switch (action.type) {
    case Constants.SAVE_APP_FORM_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.SAVE_APP_FORM_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case Constants.SAVE_APP_FORM_FAILURE:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case Constants.FETCH_APP_FORM_REQUEST:
      return {
        ...state,
        loading: true
      };
      case Constants.FETCH_APP_FORM_SUCCESS:
        return {
          ...state,
          ...action.payload,
          loading: false
        };
      case Constants.FETCH_APP_FORM_FAILURE:
        return {
          ...state,
          ...action.payload,
          loading: false
        };
    default:
      return state;
  }
};

export { appFormReducer, IAppFormReducer };
