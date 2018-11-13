import axios from 'axios';

class QueryBuilderService {
  public static getQueryFields = (data: any, organizationId?: string) => {
    axios({
      data,
      method: organizationId ? 'put' : 'post',
      url: organizationId ? `/organizations/${organizationId}` : `/organizations/`
    });
  }
}

export default QueryBuilderService;
