import FormConstants from './constants';

export const formRequest = (data: any) => ({
  payload: data,
  type: FormConstants.FORM_REQUEST
});

export const formSuccess = (data: any) => ({
  payload: data,
  type: FormConstants.FORM_SUCCESS
});

export const formFailure = () => ({
  type: FormConstants.FORM_FAILURE
});
