import GraphiQL from 'graphiql';
import * as React from 'react';
import './index.css';

interface IProps extends React.Props<CustomGraphiql> {
  query: string;
  fetcher: any;
  onEditQuery: (newQuery: any) => void;
  onEditVariables: (newVariables: any) => void;
  onEditOperationName: (newOperationName: any) => void;
}

class CustomGraphiql extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      // REQUIRED:
      // `fetcher` must be provided in order for GraphiQL to operate
      fetcher: this.props.fetcher,

      // OPTIONAL PARAMETERS
      // GraphQL artifacts
      query: this.props.query,
      variables: '',
      // tslint:disable-next-line:object-literal-sort-keys
      response: '',

      // GraphQL Schema
      // If `undefined` is provided, an introspection query is executed
      // using the fetcher.
      schema: undefined,

      // Useful to determine which operation to run
      // when there are multiple of them.
      operationName: null,
      storage: null,
      defaultQuery: null,

      // Custom Event Handlers
      onEditQuery: this.props.onEditQuery,
      onEditVariables: this.props.onEditVariables,
      onEditOperationName: this.props.onEditOperationName,

      // GraphiQL automatically fills in leaf nodes when the query
      // does not provide them. Change this if your GraphQL Definitions
      // should behave differently than what's defined here:
      // (https://github.com/graphql/graphiql/blob/master/src/utility/fillLeafs.js#L75)
      getDefaultFieldNames: null
    };
  }

  public render() {
    return (
      <div id="graphiql">
        <GraphiQL {...this.state} >
          <GraphiQL.Logo>
            iGraph Query
          </GraphiQL.Logo>
        </GraphiQL>
      </div>
    );
  }
}

export default CustomGraphiql;
