import { combineReducers } from 'redux';
import { IActionProps } from '.';
import Constants from '../actions/model/constants';

interface IModel {
  _id?: string;
  name: string;
  applicationName: string;
  email: string;
  isActive: boolean;
  loading: boolean;
}

interface IModels {
  data: IModel[];
  total: number;
  loading: boolean;
}

interface IModelReducer {
  currentModel: IModel,
  list: IModels;
}

const listInitialState: IModels = {
  data: [],
  loading: false,
  total: 0
};

const modelInitialState: IModel = {
  applicationName: '',
  email: '',
  isActive: true,
  loading: false,
  name: ''
};

const modelReducer = (state: IModel = modelInitialState, action: IActionProps): IModel => {
  switch (action.type) {
    case Constants.FETCH_MODEL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.FETCH_MODEL_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    case Constants.FETCH_MODEL_FAILURE:
      return modelInitialState;
    default:
      return state;
  }
};

const modelListReducer = (state: IModels = listInitialState, action: IActionProps): IModels => {
  switch (action.type) {
    case Constants.FETCH_MODEL_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.FETCH_MODEL_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case Constants.FETCH_MODEL_LIST_FAILURE:
      return {
        ...state,
        ...listInitialState,
        loading: false
      };
    default:
      return state;
  }
};

const modelReducers = combineReducers({
  currentModel: modelReducer,
  list: modelListReducer
});

export { modelReducers, IModelReducer, IModel, IModels };
