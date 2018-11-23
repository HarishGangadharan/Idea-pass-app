import axios from 'axios';

class FormSchemaService {
  public static createFormSchema = (data: any, schemaId?: string) => axios({
      data,
      method: schemaId ? 'put' : 'post',
      url: schemaId ? `/form-meta-ui/${schemaId}` : `/form-meta-ui/`
  })

  public static fetchFormSchema = (schemaId?: string) => axios({
    method: 'get',
    url: `/form-meta-ui/${schemaId}`
  })

  public static getAllFormSchema = (limit: number, currentPage: number, sortField: string, sortOrder: number, filters?: string) => {
    let queryString = '/form-meta-ui';
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
  }
}

export default FormSchemaService;
