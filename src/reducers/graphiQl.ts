import { IActionProps } from '.';
import GraphiQlConstants from '../actions/graphiQl/constants';

export interface IGraphiQlReducer {
  loading: boolean,
  response: any,
  error: any,
  graphiQl: any,
  data: any[],
  total: number,
}

const graphiQlInitialState: IGraphiQlReducer = {
  data: [],
  error: null,
  graphiQl: null,
  loading: false,
  response: null,
  total: 0
};

export const graphiQlReducer = (state: IGraphiQlReducer = graphiQlInitialState, actions: IActionProps) => {
  switch (actions.type) {
    case GraphiQlConstants.CREATE_UPDATE_QUERY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GraphiQlConstants.CREATE_UPDATE_QUERY_SUCCESS:
      return {
        ...state,
        graphiQl: null,
        loading: false,
        response: actions.response
      };
    case GraphiQlConstants.CREATE_UPDATE_QUERY_FAIL:
      return {
        ...state,
        error: actions.error,
        loading: false
      };
      case GraphiQlConstants.FETCH_QUERY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GraphiQlConstants.FETCH_QUERY_SUCCESS:
      return {
        ...state,
        graphiQl: actions.response,
        loading: false
      };
    case GraphiQlConstants.FETCH_QUERY_FAIL:
      return {
        ...state,
        error: actions.error,
        loading: false
      };

    case GraphiQlConstants.FETCH_QUERY_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GraphiQlConstants.FETCH_QUERY_LIST_SUCCESS:
      return {
        ...state,
        data: actions.response.data,
        loading: false,
        total: actions.response.total
      };
    case GraphiQlConstants.FETCH_QUERY_LIST_FAIL:
      return {
        ...state,
        error: actions.error,
        loading: false
      };
    default:
      return state;
  }
};
