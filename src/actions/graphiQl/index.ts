
import GraphiQlConstants from './constants';

export const createOrUpdateGraphiQl = (data: any) => ({
  data,
  type: GraphiQlConstants.CREATE_UPDATE_QUERY_REQUEST
});

export const createOrUpdateGraphiQlSuccess = (response: any) => ({
  response,
  type: GraphiQlConstants.CREATE_UPDATE_QUERY_SUCCESS
});


export const createOrUpdateGraphiQlFail = (error: any) => ({
  error,
  type: GraphiQlConstants.CREATE_UPDATE_QUERY_FAIL
});

export const fetchGraphiQlById = (id: any) => ({
  id,
  type: GraphiQlConstants.FETCH_QUERY_REQUEST
});

export const fetchGraphiQlSuccess = (response: any) => ({
  response,
  type: GraphiQlConstants.FETCH_QUERY_SUCCESS
});


export const fetchGraphiQlFail = (error: any) => ({
  error,
  type: GraphiQlConstants.FETCH_QUERY_FAIL
});



export const updateGraphiQl = (data: any) => ({
  data,
  type: GraphiQlConstants.UPDATE_QUERY_REQUEST
});

export const updateGraphiQlSuccess = (response: any) => ({
  response,
  type: GraphiQlConstants.UPDATE_QUERY_SUCCESS
});


export const updateGraphiQlFailure = (error: any) => ({
  error,
  type: GraphiQlConstants.UPDATE_QUERY_FAIL
});

export const fetchGraphiQlList = (data: any) => ({
  data,
  type: GraphiQlConstants.FETCH_QUERY_LIST_REQUEST
});

export const fetchGraphiQlListSuccess = (response: any) => ({
  response,
  type: GraphiQlConstants.FETCH_QUERY_LIST_SUCCESS
});


export const fetchGraphiQlListFail = (error: any) => ({
  error,
  type: GraphiQlConstants.FETCH_QUERY_LIST_FAIL
});

