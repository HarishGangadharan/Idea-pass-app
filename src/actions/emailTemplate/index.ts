import { IRequestFilter } from 'request-filter';
import EmailTemplateConstants from './constants';

export interface IEmailTemplate {
  _id?: string;
  name: string;
  description: string;
  type: string;
  body: string;
  body_json: IGeneratedTemplate;
  createdAt?: string;
  updatedAt?: string
}

export interface IGeneratedTemplate {
  css: string,
  design: object,
  html: string,
}

export interface ITemplateList {
  id: string,
  name: string,
  type: string,
  description: string
}

export const createOrUpdateEmailTemplate = (data: IEmailTemplate) => ({
  data,
  type: EmailTemplateConstants.CREATE_OR_UPDATE_EMAIL_TEMPLATE
});


export const createOrUpdateEmailTemplateSuccess = (response: any) => ({
  response,
  type: EmailTemplateConstants.CREATE_OR_UPDATE_EMAIL_TEMPLATE_SUCCESS
});

export const createOrUpdateEmailTemplateFail = (error: any) => ({
  error,
  type: EmailTemplateConstants.CREATE_OR_UPDATE_EMAIL_TEMPLATE_FAIL
});


export const getEmailTemplate = (id: string, callback?: (response: IEmailTemplate) => void) => ({
  callback,
  id,
  type: EmailTemplateConstants.GET_EMAIL_TEMPLATE
});


export const getEmailTemplateSuccess = (response: any) => ({
  response,
  type: EmailTemplateConstants.GET_EMAIL_TEMPLATE_SUCCESS
});

export const getEmailTemplateFail = (error: any) => ({
  error,
  type: EmailTemplateConstants.GET_EMAIL_TEMPLATE_FAIL
});

export const getAllEmailTemplates = (data: IRequestFilter) => ({
  data,
  type: EmailTemplateConstants.GET_ALL_EMAIL_TEMPLATES
});


export const getAllEmailTemplatesSuccess = (response: any) => ({
  response,
  type: EmailTemplateConstants.GET_ALL_EMAIL_TEMPLATES_SUCCESS
});

export const getAllEmailTemplatesFail = (error: any) => ({
  error,
  type: EmailTemplateConstants.GET_ALL_EMAIL_TEMPLATES_FAIL
});

export const resetInitialState = () => ({
  type: EmailTemplateConstants.RESET_INITIAL_STATE
});

