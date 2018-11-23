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

  public static fetchFormTriggerList = (formId: string, limit: number, currentPage: number) => axios({
    method: 'get',
    url: `/form-meta-ui/${formId}/triggers`
  })

}

export default FormTriggerService;
