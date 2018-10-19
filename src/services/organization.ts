import axios from 'axios';

class OrganizationService {
  public static createOrganization = (data: any, organizationId?: string) => {
    axios({
      data,
      method: organizationId ? 'put' : 'post',
      url: organizationId ? `/organizations/${organizationId}` : `/organizations/`
    });
  }

  public static fetchOrganization = (organizationId?: string) => axios({
    method: 'get',
    url: `/organizations/${organizationId}`
  })

  public static getAllOrganization = (limit: number, currentPage: number) => axios({
    method: 'get',
    url: `/organizations?$limit=${limit}&$skip=${limit * (currentPage - 1)}`
  })
}

export default OrganizationService;
