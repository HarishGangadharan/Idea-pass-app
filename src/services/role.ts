import axios from 'axios';

class RoleService {
  public static createRole = (data: any, roleId?: string) => {
    axios({
      data,
      method: roleId ? 'put' : 'post',
      url: roleId ? `/roles/${roleId}` : `/roles/`
    });
  }

  public static fetchRole = (roleId?: string) => axios({
    method: 'get',
    url: `/roles/${roleId}`
  })

  public static getAllRole = (tenantId: string, limit: number, currentPage: number) => axios({
    method: 'get',
    url: `/roles/?tenant=${'5bc5fd4ac34ad51cd6409db3'}&$limit=${limit}&$skip=${limit * (currentPage - 1)}`
  })
}

export default RoleService;
