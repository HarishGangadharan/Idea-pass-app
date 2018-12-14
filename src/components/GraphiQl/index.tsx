import GraphiQL from 'graphiql';
import * as React from 'react';
import './index.css';

interface IProps extends React.Props<CustomGraphiql> {
}

class CustomGraphiql extends React.Component<IProps> {
  public search = window.location.search;
  public parameters: any = {};
  constructor(props: IProps) {
    super(props);
    this.search.substr(1).split('&').forEach((entry) => {
      const eq = entry.indexOf('=');
      if (eq >= 0) {
        this.parameters[decodeURIComponent(entry.slice(0, eq))] =
          decodeURIComponent(entry.slice(eq + 1));
      }
    });
    // if variables was provided, try to format it.
    if (this.parameters.variables) {
      try {
        this.parameters.variables =
          JSON.stringify(JSON.parse(this.parameters.variables), null, 2);
      } catch (e) {
        // Do nothing, we want to display the invalid JSON as a string, rather
        // than present an error.
      }
    }
  }
  // When the query and variables string is edited, update the URL bar so
  // that it can be easily shared
  public onEditQuery = (newQuery: any) => {
    this.parameters.query = newQuery;
    this.updateURL();
  }

  public onEditVariables = (newVariables: any) => {
    this.parameters.variables = newVariables;
    this.updateURL();
  }

  public onEditOperationName = (newOperationName: any) => {
    this.parameters.operationName = newOperationName;
    this.updateURL();
  }

  public updateURL = () => {
    const newSearch = '?' + Object.keys(this.parameters).filter((key) => {
      return Boolean(this.parameters[key]);
    }).map((key) => {
      return encodeURIComponent(key) + '=' +
        encodeURIComponent(this.parameters[key]);
    }).join('&');
    // tslint:disable-next-line:no-console
    console.log('newsearch', newSearch);
    // history.replaceState(null, null, newSearch);
  }
  public graphQLFetcher = (graphQLParams: any) => {
    // This example expects a GraphQL server at the path /graphql.
    // Change this to point wherever you host your GraphQL server.
    // http://192.168.2.5:3030/graphql
    // http://localhost:3003/__schema
    return fetch('http://192.168.2.5:3030/graphql', {
      method: 'post',
      // tslint:disable-next-line:object-literal-sort-keys
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(graphQLParams),
      credentials: 'include'
    }).then((response) => {
      // tslint:disable-next-line:no-console
      console.log('reponse', response);
      return response.text();
    }).then((responseBody) => {
      try {
        // tslint:disable-next-line:no-console
        console.log('reponseBody', responseBody);
        return JSON.parse(responseBody);
      } catch (error) {
        return responseBody;
      }
    });
  }

  public render() {
    return (
      <div id="graphiql">
        <GraphiQL fetcher={this.graphQLFetcher} />
      </div>
    );
  }
}

export default CustomGraphiql;
