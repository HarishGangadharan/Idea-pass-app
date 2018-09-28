import axios from 'axios';

class MetaformService {
  public static getAllMetaForms = (limit: number, currentPage: number) => axios({
    method: 'get',
    url: `/formschema?$limit=${limit}&skip=${limit * (currentPage - 1)}`
  })

  public static getFormSchema = (schemaId: string) => axios({
    method: 'get',
    url: `/formschema/${schemaId}`
  })
}

export default MetaformService;
