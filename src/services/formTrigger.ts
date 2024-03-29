import axios from 'axios';

class FormTriggerService {
  public static saveFormTrigger = (data: any, formTriggerId?: string) => axios({
    data,
    method: formTriggerId ? 'put' : 'post',
    url: formTriggerId ? `/meta-triggers/${formTriggerId}` : `/meta-triggers`
  })

  public static fetchFormTrigger = (formTriggerId: string) => axios({
    method: 'get',
    url: `/meta-triggers/${formTriggerId}`
  })

  public static fetchFormFieldsTrigger = (formName: string) => axios({
    method: 'get',
    url: `/form-fields/${formName}`
  })

  public static fetchFormTriggerList = (formId: string, limit: number, currentPage: number) => {
    let queryUrl: string = `/form-meta-ui/${formId}/triggers`;
    if (limit && currentPage) {
      queryUrl = `${queryUrl}?$limit=${limit}&$skip=${limit * (currentPage - 1)}`;
    }
    return axios({
      method: 'get',
      url: queryUrl
    });
  }

}

export default FormTriggerService;
