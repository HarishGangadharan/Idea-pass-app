declare module "jss-preset-default";
declare module "react-jss/*";
declare module "key-mirror";

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
