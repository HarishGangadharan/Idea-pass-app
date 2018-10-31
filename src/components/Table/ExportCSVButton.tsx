import * as React from 'react';

interface IExportButtonProps {
  onExport?: any,
  onFetchAll: any,
  remote: boolean,
  children: any
}

export default class ExportCSVButton extends React.Component<IExportButtonProps, object> {
  public render() {
    return (
      <button className="btn btn-primary" onClick={this.handleClick}>{this.props.children}</button>
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
