import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { createOrUpdateGraphiQl, fetchGraphiQlById } from '../../actions/graphiQl';
import CustomGraphiql from '../../components/GraphiQl';
import { AppProperties } from '../../constants/application.properties';
import { IState } from '../../reducers';
import CButton from '../../components/Button/CButton';
interface IGraphiQlProps {
  createOrUpdateGraphiQl: (data: any) => void;
  fetchGraphiQlById: (id: any) => void;
  graphiQl: any;
  graphiQlLoading: boolean;
}

interface IGraphiQlState {
  description: string;
  _id: string;
  name: string;
  queryString: string;
  queryError: boolean;
}

class GraphiQl extends React.Component<IGraphiQlProps & RouteComponentProps<{ id: string }>, IGraphiQlState> {
  public static getDerivedStateFromProps(props: IGraphiQlProps, state: IGraphiQlState) {
    if (props.graphiQl && props.graphiQl._id !== state._id ) {
      const { _id , name, description, queryString } = props.graphiQl;
      return {
        _id,
        description,
        name,
        queryString
      };
    }
    return null;
  }

  public parameters: any = {};
  constructor(props: IGraphiQlProps & RouteComponentProps<{ id: string }>) {
    super(props);
    this.state = {
      _id: '',
      description: '',
      name: '',
      queryError: false,
      queryString: ''
    };
  }

  public componentDidMount() {
    const match = this.props.match;
    if (match && match.params.id) {
      this.props.fetchGraphiQlById(match.params.id);
    }
  }

  public handleSaveOrUpdate = () => {
    const { _id, name, description } = this.state;
    const data =  {
      _id,
      description,
      name,
      queryString: this.parameters.query,
      type: 'graphiQL'
    };
    if (!_id) {
      delete data._id;
    }
    this.props.createOrUpdateGraphiQl(data);

  }

  public onEditQuery = (newQuery: any) => {
    this.parameters.query = newQuery;
  }

  public onEditVariables = (newVariables: any) => {
    this.parameters.variables = newVariables;
  }

  public onEditOperationName = (newOperationName: any) => {
    this.parameters.operationName = newOperationName;
  }

  public graphQLFetcher = (graphQLParams: any) => {
    return fetch(`${AppProperties.BASE_URL}/graphql`, {
      body: JSON.stringify(graphQLParams),
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post'
    }).then((response) => {
      return response.text();
    }).then((responseBody) => {
      try {
        return JSON.parse(responseBody);
      } catch (error) {
        return responseBody;
      }
    });
  }

  public render() {
    const { graphiQlLoading } = this.props;
    const { name, description, queryString, queryError } = this.state;
    return (
      <div className="shadow-container">
        <div>
          <div className="form-group">
            <label className="control-label">Name</label> <span className="error-text">*</span>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange = { evt => {this.setState({ name: evt.target.value }); }}
              required={true}
            />
          </div>
          <div className="form-group">
            <label className="control-label">Description</label>
            <input
              type="text"
              value={description}
              className="form-control"
              onChange = { evt => {this.setState({ description: evt.target.value }); }}/>
          </div>
          {<div className="form-group">
            <label className="control-label">Query</label> <span className="error-text">*</span>
            {!graphiQlLoading && <CustomGraphiql
              query={queryString}
              fetcher={this.graphQLFetcher}
              onEditQuery={this.onEditQuery}
              onEditVariables={this.onEditVariables}
              onEditOperationName={this.onEditOperationName}
              />}
          </div>}
        </div>
        <div className="row d-flex justify-content-end">
          <CButton
            className="btn btn-primary"
            disabled={name === '' || queryError}
            onClick={this.handleSaveOrUpdate}
            name="submit"
          />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  graphiQl: state.graphiQl.graphiQl,
  graphiQlLoading: state.graphiQl.loading
});

const mapDispatchToProps = {
  createOrUpdateGraphiQl,
  fetchGraphiQlById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphiQl);
