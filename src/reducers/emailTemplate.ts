
import { IActionProps } from './index';

import EmailTemplateConstants from '../actions/emailTemplate/constants';

export interface IEmailTemplate {
  data: ITemplateList[];
  loading: boolean;
  template: any;
  total: number;
}

export interface ITemplateList {
  id: string,
  name: string,
  type: string,
  description: string
}

const emailTemplateInitialState: IEmailTemplate = {
  data: [],
  loading: false,
  template: null,
  total: 0
};

export const emailTemplateReducer = (state: IEmailTemplate = emailTemplateInitialState, action: IActionProps ) => {
  switch (action.type) {
    case EmailTemplateConstants.CREATE_OR_UPDATE_EMAIL_TEMPLATE:
      return {
        ...state,
        loading: true
      };
    case EmailTemplateConstants.CREATE_OR_UPDATE_EMAIL_TEMPLATE_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case EmailTemplateConstants.CREATE_OR_UPDATE_EMAIL_TEMPLATE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };

      case EmailTemplateConstants.GET_EMAIL_TEMPLATE:
      return {
        ...state,
        loading: true
      };
    case EmailTemplateConstants.GET_EMAIL_TEMPLATE_SUCCESS:
      return {
        ...state,
        loading: false,
        template: action.response
      };
    case EmailTemplateConstants.GET_EMAIL_TEMPLATE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case EmailTemplateConstants.GET_ALL_EMAIL_TEMPLATES:
      return {
        ...state,
        loading: true
      };
    case EmailTemplateConstants.GET_ALL_EMAIL_TEMPLATES_SUCCESS:
      return {
        ...state,
        data: action.response.data,
        loading: false,
        total: action.response.total
      };
    case EmailTemplateConstants.GET_ALL_EMAIL_TEMPLATES_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case EmailTemplateConstants.RESET_INITIAL_STATE:
      return emailTemplateInitialState;

    default:
     return state;
  }
};
