import axios from 'axios';

class RolePermissionService {
  public static createRolePermission = (data: any, tenantId: string, modelName: string) => {
    axios({
      data,
      method: 'post',
      url: `/permission?tenant=${tenantId}&model=${modelName}`
    });
  }

  public static fetchRolePermission = (tenantId: string, modelName: string) => axios({
    method: 'get',
    url: `/permission?tenant=${tenantId}&model=${modelName}`
  })
}

export default RolePermissionService;
