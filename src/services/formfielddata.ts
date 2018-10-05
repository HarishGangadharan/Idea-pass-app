import axios from 'axios';

class FormFieldDataService {
  public static saveFormFieldData = (data: any, formName: string, formDataId?: string) => {
    axios({
      data,
      method: formDataId ? 'put' : 'post',
      url: formDataId ? `/forms/${formName}/${formDataId}` : `/forms/${formName}`
    });
  }

  public static fetchFormFieldData = (formDataId?: string) => axios({
    method: 'get',
    url: formDataId ? `/form/${formDataId}` : `/formschema/`
  })

}

export default FormFieldDataService;
