import actionConstants from '../actions/metaforms/constants';
import { IActionProps } from './index';

export interface IMetaformState {
  data: object[],
  loading: boolean,
  total: number
}

const initialState = {
  data: [],
  loading: false,
  total: 1
};

export const metaformsReducer = (state: IMetaformState = initialState, action: IActionProps) : IMetaformState => {
  switch (action.type) {
    case actionConstants.FETCH_ALL_METAFORMS:
      return Object.assign({}, state, {
        loading: true
      });
    case actionConstants.FETCH_ALL_METAFORMS_SUCCESS:
      return Object.assign({}, state, {
        data: action.response.data,
        loading: false,
        total: action.response.total
      });
    case actionConstants.FETCH_ALL_METAFORMS_ERROR:
      return Object.assign({}, state, {
        loading: false
      });
    default:
      return state;
  }
};
