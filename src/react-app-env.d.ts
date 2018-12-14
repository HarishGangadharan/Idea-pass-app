/// <reference types="react-scripts" />
declare module 'graphiql';
declare module 'graphql'; 
declare module "jss-preset-default";
declare module "react-jss/*";
declare module "key-mirror";
declare module "react-toastify";

// type declerations for Sending api requests with custom filters.
declare module "request-filter" {
  export interface IRequestFilter {
    currentPage ?: number;
    length?: number;
    sortField?: string;
    sortOrder?: number;
    limit?: number;
  }

  export interface IRequestQuery extends IRequestFilter {
    resource?: string;
    filters?: string;
  }
}
declare module '@nivo/line';
declare module 'formiojs/*';
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module "*.json" {
  export const value: any;
}
declare module 'react-bootstrap-table-next';
declare module 'react-bootstrap-table2-paginator';
declare module 'react-bootstrap-table2-filter';
declare module 'react-bootstrap-table2-overlay';
declare module 'react-bootstrap-table2-toolkit';
declare module '*.css';
