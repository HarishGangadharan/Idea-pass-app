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
    url: schemaId ? `/formschema/${schemaId}` : `/formschema/`
  })

}

export default FormSchemaService;
