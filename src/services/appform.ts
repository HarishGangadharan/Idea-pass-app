import axios from 'axios';

class AppFormService {
  public static saveAppForm = (api: string, data: any) => axios({
    data,
    method: data.id ? 'put' : 'post',
    url: `${api}`
  })

  public static fetchAppForm = (api: string) => axios({
    method: 'get',
    url: `${api}`
  })
}

export default AppFormService;
