import axios from 'axios';

class FormFieldDataService {
  public static createFormFieldData = (data: any, schemaId?: string) => {
    axios({
      data,
      method: schemaId ? 'put' : 'post',
      url: schemaId ? `/form/${schemaId}` : `/formschema/`
    });
  }

  public static fetchFormFieldData = (formDataId?: string) => axios({
    method: 'get',
    url: formDataId ? `/form/${formDataId}` : `/formschema/`
  })

}

export default FormFieldDataService;
