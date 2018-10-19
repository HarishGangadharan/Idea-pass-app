import axios from 'axios';

class FormSchemaService {
  public static createFormSchema = (data: any, schemaId?: string) => {
    axios({
      data,
      method: schemaId ? 'put' : 'post',
      url: schemaId ? `/formschema/${schemaId}` : `/formschema/`
    });
  }

  public static fetchFormSchema = (schemaId?: string) => axios({
    method: 'get',
    url: `/formschema/${schemaId}`
  })

  public static getAllFormSchema = (limit: number, currentPage: number, sortField: string, sortOrder: number) => axios({
    method: 'get',
    url: `/formschema?$limit=${limit}&$skip=${limit * (currentPage - 1)}&$sort[${sortField}]=${sortOrder}`
  })
}

export default FormSchemaService;
