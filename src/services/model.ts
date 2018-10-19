import axios from 'axios';

class ModelService {
  public static createModel = (data: any, modelId?: string) => {
    axios({
      data,
      method: modelId ? 'put' : 'post',
      url: modelId ? `/models/${modelId}` : `/models/`
    });
  }

  public static fetchModel = (modelId?: string) => axios({
    method: 'get',
    url: `/models/${modelId}`
  })

  public static getAllModel = (tenantId: string) => axios({
    method: 'get',
    url: `/models?tenant=${tenantId}`
  })
}

export default ModelService;
