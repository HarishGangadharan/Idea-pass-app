import * as React from 'react';

interface IExportButtonProps {
  onExport?: any,
  children: any
}

export default class ExportCSVButton extends React.Component<IExportButtonProps, object> {
  public render() {
    return (
      <button className="btn btn-success" onClick={this.handleClick}>{this.props.children}</button>
    );
  }

  private handleClick = () => {
    // TODO : fetch all data and export content the content
    this.props.onExport();
  }
}
