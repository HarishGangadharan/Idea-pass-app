import axios from 'axios';

class ConfigService {
  public static fetchConfig = (configList: string, tenantId?: string) => axios({
    method: 'get',
    url: `/config?props=${configList}&tenant=${tenantId}`
  })
}

export default ConfigService;
