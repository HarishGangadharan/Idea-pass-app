import axios from 'axios';

class DynamicTableService {

  /**
   * Fetch Meta data of grid
   * @param tableMetaId
   */
  public static getDynamicTableMeta = (tableMetaId: string) => axios({
    method: 'get',
    url: `/metagrid/${tableMetaId}`
  })

  /**
   * Fetch data for grid
   * @param resource
   * @param limit
   * @param currentPage
   * @param sortField
   * @param sortOrder
   * @param filters
   */
  public static getDynamicTableData = (resource: string, limit: number, currentPage: number, sortField: string,
                                       sortOrder: number, filters?: string) => {
    let queryString = `${resource}?$limit=${limit}&$skip=${currentPage ? limit * (currentPage - 1) : 0}`;
    if (sortOrder && sortField) {
      queryString += `&$sort[${sortField}]=${sortOrder}`;
    }
    if (filters) {
      queryString += `&${filters}`;
    }
    return axios({
      method: 'get',
      url: queryString
    });
  }
}

export default DynamicTableService;
