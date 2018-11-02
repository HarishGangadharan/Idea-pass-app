import axios from 'axios';

class RolePermissionService {
  public static createRolePermission = (data: any, tenantId: string, modelName: string) => {
    axios({
      data,
      method: 'patch',
      url: `/permissions?tenant=${tenantId}&model=${modelName}`
    });
  }

  public static fetchRolePermission = (tenantId: string, modelName: string) => axios({
    method: 'get',
    url: `/permissions?tenant=${tenantId}&model=${modelName}`
  })

  public static fetchRolePermissionRules = (roles: string) => axios({
    method: 'get',
    url: `/permissions?roleId=${roles}`
  })
}

export default RolePermissionService;
