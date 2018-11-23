import axios from 'axios';

class ConfigService {
  public static fetchConfig = (configList: string, tenantId?: string) => axios({
    method: 'get',
    url: `/config?props=${configList}&tenant_id=${tenantId}`
  })
}

export default ConfigService;
