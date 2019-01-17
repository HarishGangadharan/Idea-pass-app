import * as React from 'react';
import CButton from '../Button/CButton';

interface IExportButtonProps {
  onExport?: any,
  onFetchAll: any,
  remote: boolean,
  children: any
}

export default class ExportCSVButton extends React.Component<IExportButtonProps, object> {
  public render() {
    return (
      <CButton
        className="btn btn-primary"
        name={this.props.children}
        onClick={this.handleClick}
      />
    );
  }

  private handleClick = () => {
    if (this.props.remote) {
      // To fetch all data corresponding to filter without pagination
      this.props.onFetchAll((response: any) => {
        this.props.onExport(response.data);
      });
    } else {
      this.props.onExport();
    }
  }
}
