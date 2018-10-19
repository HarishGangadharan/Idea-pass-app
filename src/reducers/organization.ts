import { combineReducers } from 'redux';
import { IActionProps } from '.';
import Constants from '../actions/organization/constants';

interface IOrganization {
  _id?: string;
  name: string;
  applicationName: string;
  email: string;
  isActive: boolean;
  loading: boolean;
}

interface IOrganizations {
  data: IOrganization[];
  total: number;
  loading: boolean;
}

interface IOrganizationReducer {
  currentOrganization: IOrganization,
  list: IOrganizations;
}

const listInitialState: IOrganizations = {
  data: [],
  loading: false,
  total: 0
};

const organizationInitialState: IOrganization = {
  applicationName: '',
  email: '',
  isActive: true,
  loading: false,
  name: ''
};

const organizationReducer = (state: IOrganization = organizationInitialState, action: IActionProps): IOrganization => {
  switch (action.type) {
    case Constants.CREATE_ORGANIZATION_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.CREATE_ORGANIZATION_SUCCESS:
      return organizationInitialState;
    case Constants.CREATE_ORGANIZATION_FAILURE:
      return organizationInitialState;
    case Constants.FETCH_ORGANIZATION_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.FETCH_ORGANIZATION_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    case Constants.FETCH_ORGANIZATION_FAILURE:
      return organizationInitialState;
    default:
      return state;
  }
};

const organizationListReducer = (state: IOrganizations = listInitialState, action: IActionProps): IOrganizations => {
  switch (action.type) {
    case Constants.FETCH_ORGANIZATION_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.FETCH_ORGANIZATION_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        total: action.payload.total
      };
    case Constants.FETCH_ORGANIZATION_LIST_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

const organizationReducers = combineReducers({
  currentOrganization: organizationReducer,
  list: organizationListReducer
});

export { organizationReducers, IOrganizationReducer, IOrganization, IOrganizations };
