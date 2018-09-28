import actionConstants from './constants';

export const fetchAllMetaforms = (limit: number, currentPage: number) => ({
  currentPage,
  limit,
  type: actionConstants.FETCH_ALL_METAFORMS
});

export const fetchAllMetaformsSuccess = (response: object) => ({
  response,
  type: actionConstants.FETCH_ALL_METAFORMS_SUCCESS
});

export const fetchAllMetaformsError = (error: any) => ({
  error,
  type: actionConstants.FETCH_ALL_METAFORMS_ERROR
});
