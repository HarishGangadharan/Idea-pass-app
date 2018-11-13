import { IActionProps } from '.';
import Constants from '../actions/querybuilder/constants';

interface IQueryBuilderReducer {
  fields : any[],
  loading: boolean
}

const queryBuilderInitialState: IQueryBuilderReducer = {
  fields: [],
  loading: false
};

const queryBuilderReducer = (state: IQueryBuilderReducer = queryBuilderInitialState, action: IActionProps): IQueryBuilderReducer => {
  switch (action.type) {
    case Constants.FETCH_QUERY_BUILDER_FIELDS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.FETCH_QUERY_BUILDER_FIELDS_SUCCESS:
      return {
        ...state,
        fields: [...action.payload.fields],
        loading: false
      };
    case Constants.FETCH_QUERY_BUILDER_FIELDS_FAILURE:
      return queryBuilderInitialState;
    default:
      return state;
  }
};

export { queryBuilderReducer, IQueryBuilderReducer };
