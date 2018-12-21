import axios from 'axios';

export default class EmailTemplateService {
  public static createOrUpdateEmailTemplate = (data: any) => axios({
    data,
    method: `${data._id ? 'put' : 'post'}`,
    url: `/template${ data._id ? `/${data._id}` : '' }`
  })

  public static getEmailTemplate = (id: any) => axios({
    method: 'get',
    url: `template/${id}`
  })

  public static getAllEmailTemplates = (data?: any) => {
    const {limit, currentPage, sortField, sortOrder, filters } = data;
    let url = '/template';
    let paginationApplied = false;
    if (limit && currentPage) {
      paginationApplied = true;
      url += `?$limit=${limit}&$skip=${limit * (currentPage - 1)}`;
    }
    if (sortOrder && sortField) {
      url += `${paginationApplied ? '' : '?'}&$sort[${sortField}]=${sortOrder}`;
    }
    if (filters) {
      url += `&${filters}`;
    }
    return axios({
      method: 'get',
      url
    });
  }
}


