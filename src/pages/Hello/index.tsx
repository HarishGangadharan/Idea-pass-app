import * as React from 'react';
import { connect } from 'react-redux';
// import HelloChild from '../../components/HelloChild';

import { fetchAllMetaforms } from '../../actions/metaforms';
import Table, { ITableState } from '../../components/Table';
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';

interface IMetaformProps {
  data: object[],
  total: number,
  loading: boolean,
  fetchAllMetaforms: any
}

interface IMetaformState {
  columns: Column[],
  currentPage: number,
  length: number
}

class Hello extends React.Component<IMetaformProps, IMetaformState>{
  constructor(props: IMetaformProps) {
    super(props);
    this.state = {
      columns: [
        (new Column()).withKey('_id').withLabel('ID'),
        (new Column()).withKey('name').withLabel('Name'),
        (new Column()).withKey('createdAt').withLabel('Created At')
      ],
      currentPage: 1,
      length: 10
    };
  }

  public componentDidMount() {
   this.fetchMetaForms();
  }

  public render() {
    const { loading, data, total } = this.props;
    return (
      <div className="row">
        <Table
          id="users"
          data={data}
          columns={this.state.columns}
          loading={loading}
          length={10}
          currentPage={1}
          total={total}
          onUpdate={(nextState: ITableState) => {
            const { page, sizePerPage } = nextState;
            this.setState({
              currentPage: page,
              length: sizePerPage
            }, this.fetchMetaForms);
          }}
        />
      </div>
    );
  }

  private fetchMetaForms = () => {
    const { currentPage, length } = this.state;
    this.props.fetchAllMetaforms(length, currentPage);
  }
}

const mapStateToProps = (state: IState) => ({
  data: state.metaform.data,
  loading: state.metaform.loading,
  total: state.metaform.total
});

const mapDispatchToProps = ({
  fetchAllMetaforms
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
