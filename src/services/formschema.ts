import axios from 'axios';

class FormSchemaService {
  public static createFormSchema = (data: any, schemaId?: string) => axios({
      data,
      method: schemaId ? 'put' : 'post',
      url: schemaId ? `/formschema/${schemaId}` : `/formschema/`
  })

  public static fetchFormSchema = (schemaId?: string) => axios({
    method: 'get',
    url: `/formschema/${schemaId}`
  })

  public static getAllFormSchema = (limit: number, currentPage: number, sortField: string, sortOrder: number, filters?: string) => {
    let queryString = '/formschema';
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
