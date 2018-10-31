import Column, { IColDef } from '../components/Table/Column';

export const isEmailValid = (email: string) : boolean => {
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(email).toLowerCase());
};

export const constructColumns = (cols: IColDef[]): Column[] =>
  cols.map(col => Column.convertObjectToColumn(col));

export const comparatorsForAPI = (comparator: string): string => {
  if (comparator === '!=') {
    return '[$ne]=';
  } else if (comparator === '>') {
    return '[$gt]=';
  } else if (comparator === '>=') {
    return '[$gte]=';
  } else if (comparator === '<') {
    return '[$lt]=';
  } else if (comparator === '<=') {
    return '[$lte]=';
  } else {
    return comparator;
  }
};
