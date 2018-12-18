import axios from 'axios';

export const saveOrUpdateGraphiQl = (data: any) => axios({
  data,
  method: `${data._id ? 'put' : 'post'}`,
  url: `/query${ data._id ? `/${data._id}` : '' }`
});

export const getGraphiQlById = (id: string) => axios({
  method: 'get',
  url: `/query/${id}`
});

export const fetchGraphiQlQueries = (data: any) => {
  const {limit, currentPage, sortField, sortOrder, filters } = data;
  let queryString = '/query';
  let paginationApplied = false;
  if (limit && currentPage) {
    paginationApplied = true;
    queryString += `?$limit=${limit}&$skip=${limit * (currentPage - 1)}`;
  }
  if (sortOrder && sortField) {
    queryString += `${paginationApplied ? '' : '?'}&$sort[${sortField}]=${sortOrder}`;
  }
  if (filters) {
    queryString += `&${filters}`;
  }
  return axios({
    method: 'get',
    url: queryString
  });
};
