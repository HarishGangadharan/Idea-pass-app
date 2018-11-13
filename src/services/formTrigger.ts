import axios from 'axios';

class FormTriggerService {
  public static saveFormTrigger = (data: any, formName: string, formTriggerId?: string) => {
    axios({
      data,
      method: formTriggerId ? 'put' : 'post',
      url: formTriggerId ? `/metatriggers/${formName}/${formTriggerId}` : `/forms/${formName}`
    });
  }

  public static fetchFormTrigger = (formName: string, formTriggerId?: string) => axios({
    method: 'get',
    url: `/metatriggers/${formName}/${formTriggerId}`
  })

  public static fetchFormTriggerList = (formName: string, limit: number, currentPage: number) => axios({
    method: 'get',
    url: `/metatriggers`
  })

}

export default FormTriggerService;
