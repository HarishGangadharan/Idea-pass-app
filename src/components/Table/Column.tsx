import * as React from 'react';
import { dateFilter, numberFilter, selectFilter, textFilter } from 'react-bootstrap-table2-filter';

export interface IHeaderComponent {
  sortElement: any,
  filterElement: any
}

export interface IBootstrapColumn {
  dataField: string,
  text: string,
  isDummyField: boolean,
  hidden: boolean,
  formatter: any,
  formatExtraData: any,
  sort: boolean,
  classes: any,
  events: object,
  align: any,
  headerFormatter: any,
  headerClasses: any,
  headerEvents: any,
  headerAlign: any,
  csvExport: boolean,
  searchKey: string,
  type: string
}

export interface IColDef {
  key: string,
  name: string,
  filterable?: boolean,
  enableSort?: boolean,
  type?: string,
  options?: any,
  valueField?: string,
  textField?: string
}

export default class Column {
  public static COLUMN_TYPES = {
    DATE: 'DATE',
    NONE: 'NONE',
    NUMBER: 'NUMBER',
    SELECT: 'SELECT',
    TEXT: 'TEXT'
  };

  /**
   * Transform object to Column
   */
  public static convertObjectToColumn = (col: IColDef): Column => {
    const columnDef: Column =  new Column().withKey(col.key).withLabel(col.name);
    if (col.enableSort) {
      columnDef.asSortable();
    }
    if (col.type) {
      if (col.filterable) {
        columnDef.enableFilter();
      }
      columnDef.ofType(col.type);
      if (col.type === Column.COLUMN_TYPES.SELECT) {
        let options = col.options;
        if (col.textField && col.valueField) {
          options = col.options.reduce((accumulator: object, option: any) => {
            return Object.assign({}, accumulator, {
              // @ts-ignore
              [option[col.valueField]]: option[col.textField]
            });
          }, {});
        }
        columnDef.withFilterConfig({
          options
        });
      }
    }
    return columnDef;
  }

  public isHidden: boolean;
  public searchKey: string;
  public type: string;

  private key: string;
  private label: string;
  private isActionColumn: boolean;
  private cellFormatter: any;
  private unit: any;
  private sortable: boolean;
  private rowClass: any;
  private onClick: any;
  private align: any;
  private headerFormatter: any;
  private headerClass: any;
  private filterConfig: object;
  private isFilterable: boolean;

  constructor() {
    this.key = '';
    this.label = '';
    this.isActionColumn = false;
    this.isHidden = false;
    this.searchKey = '';
    this.cellFormatter = (cell: any, row: object, rowIndex: number, formatExtraData: any) : any => cell;
    this.unit = '';
    this.sortable = false;
    this.rowClass = '';
    this.onClick = (e: any) => {
      e.preventDefault();
    };
    this.align = 'left';
    this.headerFormatter = (column: IBootstrapColumn, colIndex: number, components: IHeaderComponent) : any => (
      <div>
        {column.text}
        {components.sortElement}
        {components.filterElement}
      </div>
    );
    this.headerClass = '';
    this.type = Column.COLUMN_TYPES.NONE;
    this.filterConfig = {};
    this.isFilterable = false;
  }

  /**
   * Add data identifier (i.e dataField) to Column
   * NOTE: Mandatory
   * @param key
   */
  public withKey = (key: string) : Column => {
    this.key = key;
    this.searchKey = key;
    return this;
  }

  /**
   * Add label (i.e text) to Column
   * NOTE: Mandatory
   * @param label
   */
  public withLabel = (label: string) : Column => {
    this.label = label;
    return this;
  }

  /**
   * Get key of column
   */
  public getKey = () : string => this.key;

  /**
   * Get Label of column
   */
  public getLabel = () : string => this.label;

  /**
   * Enable filter withing column
   */
  public enableFilter = (): Column => {
    this.isFilterable = true;
    return this;
  }

  /**
   * Add column type to add column filter based on the type
   * NOTE : Optional
   * @param type
   */
  public ofType = (type: string) : Column => {
    this.type = type;
    return this;
  }

  /**
   * Specify if column has only actions (like Edit, More, etc)
   * NOTE : Optional
   */
  public asActionColumn = () : Column => {
    this.isActionColumn = true;
    return this;
  }

  /**
   * Specify whether column is hidden or shown both in display and CSV
   * @NOTE: Optional
   * @param isHidden
   */
  public markAsHidden = (isHidden: boolean) : Column => {
    this.isHidden = isHidden;
    return this;
  }

  /**
   * Add cell formatter to customize the display of the content
   * Reference: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/basic-column.html
   * @param cellformatter
   */
  public withCellFormatter = (cellformatter: any) : Column => {
    this.cellFormatter = cellformatter;
    return this;
  }

  /**
   * Add extra data like unit or suffix to cell content (i.e formatExtraData)
   * Reference: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/basic-column.html
   * @param unit
   */
  public withUnit = (unit: string) : Column => {
    this.unit = unit;
    return this;
  }

  /**
   * Specify whether column is sortable to display sort options
   * NOTE: Server side sorting function will be called to refresh the data
   */
  public asSortable = () : Column => {
    this.sortable = true;
    return this;
  }

  /**
   * Specify additional class for Row
   * Reference: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/basic-row.html
   * @param rowClass
   */
  public withRowClass = (rowClass: any) : Column => {
    this.rowClass = rowClass;
    return this;
  }

  /**
   * Specify callback for row click
   * @param onClick
   */
  public withClickHandler = (onClick: any) : Column => {
    this.onClick = onClick;
    return this;
  }

  /**
   * Specify column content alignment : both header and cells
   * @param align
   */
  public withAlign = (align: string) : Column => {
    this.align = align;
    return this;
  }

  /**
   * Specify Header formatter to customize alignments or display of column header
   * Reference: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/column-props.html#columnheaderformatter-function
   * @param headerFormatter
   */
  public withHeaderFormatter = (headerFormatter: any) : Column => {
    this.headerFormatter = headerFormatter;
    return this;
  }

  /**
   * Specify custom column header class
   * @param headerClass
   */
  public withHeaderClass = (headerClass: any) : Column => {
    this.headerClass = headerClass;
    return this;
  }

  /**
   * Specify custom filter configuration for types column
   * REFERENCE : https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/filter-props.html
   * @param filterConfig
   */
  public withFilterConfig = (filterConfig: any) : Column => {
    this.filterConfig = filterConfig;
    return this;
  }

  /**
   * Specify search Key to be associated with the column
   * NOTE : Specify if the table is searchable and column key is not the same as search key
   * @param searchKey
   */
  public withSearchKey = (searchKey: string) : Column => {
    this.searchKey = searchKey;
    return this;
  }

  /**
   * Retrieve filter for column type
   */
  public getFilterForType = () => {
    if (this.type === Column.COLUMN_TYPES.TEXT) {
      return textFilter(this.filterConfig);
    } else if (this.type === Column.COLUMN_TYPES.NUMBER) {
      return numberFilter(this.filterConfig);
    } else if (this.type === Column.COLUMN_TYPES.DATE) {
      return dateFilter(this.filterConfig);
    } else if (this.type === Column.COLUMN_TYPES.SELECT) {
      return selectFilter(this.filterConfig);
    }
    return null;
  }

  /**
   * Transform Column to bootstrap column props
   */
  public convertToBootstrapTableColumn = (): IBootstrapColumn => {
    let defaultColumn = {
      align: this.align,
      classes: this.rowClass,
      csvExport: !this.isHidden,
      dataField: this.key,
      events: {
        onClick: this.onClick
      },
      formatExtraData: this.unit,
      formatter: this.cellFormatter,
      headerAlign: this.align,
      headerClasses: this.headerClass,
      headerEvents: {
        onClick: this.onClick
      },
      headerFormatter: this.headerFormatter,
      hidden: this.isHidden,
      isDummyField: this.isActionColumn,
      searchKey: this.searchKey,
      sort: this.sortable,
      text: this.label,
      type: this.type
    };

    if (this.isFilterable && this.type !== Column.COLUMN_TYPES.NONE) {
      defaultColumn = Object.assign({}, defaultColumn, {
        filter: this.getFilterForType()
      });
    }

    return defaultColumn;
  }
}
