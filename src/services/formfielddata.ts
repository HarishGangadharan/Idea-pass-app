import axios from 'axios';

class FormFieldDataService {
  public static saveFormFieldData = (data: any, formName: string, formDataId?: string) => {
    axios({
      data,
      method: formDataId ? 'put' : 'post',
      url: formDataId ? `/forms/${formName}/${formDataId}` : `/forms/${formName}`
    });
  }

  public static fetchFormFieldData = (formName: string, submissionId?: string) => axios({
    method: 'get',
    url: `/forms/${formName}/${submissionId}`
  })

  public static fetchFormFieldDataList = (formName: string, limit: number, currentPage: number) => axios({
    method: 'get',
    url: `/forms/${formName}?$limit=${limit}&$skip=${limit * (currentPage - 1)}`
  })

}

export default FormFieldDataService;
