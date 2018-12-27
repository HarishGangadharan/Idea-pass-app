import axios from 'axios';

class RolePermissionService {
  public static createRolePermission = (data: any) => axios({
    data,
    method: 'patch',
    url: `/permissions`
  })

  public static fetchRolePermission = (tenantId: string, modelName: string) => axios({
    method: 'get',
    url: `/permissions?tenant_id=${tenantId}&subject=${modelName}`
  })

  public static fetchRolePermissionRules = (roles: string) => axios({
    /**
     * Here removeFromQueue starts true.
     * beacuse didn't receive the response,
     * so we create a boolean value to resolve by calling true.
     */
    data: {
      removeFromQueue: true
    },
    method: 'get',
    url: `/permissions?role_id=${roles}`
  })
}

export default RolePermissionService;
