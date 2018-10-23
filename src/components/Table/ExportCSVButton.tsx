import * as React from 'react';

interface IExportButtonProps {
  onExport?: any,
  onFetchAll: any,
  children: any
}

export default class ExportCSVButton extends React.Component<IExportButtonProps, object> {
  public render() {
    return (
      <button className="btn btn-primary" onClick={this.handleClick}>{this.props.children}</button>
    );
  }

  private handleClick = () => {
    // To fetch all data corresponding to filter without pagination
    this.props.onFetchAll((data: any) => {
      this.props.onExport(data.data);
    });
  }
}
