import axios from 'axios';
import { IRequestFilter } from 'request-filter';
import { constructUrl } from '../utils/commonUtil';

export const getUsers = (requestFilter: IRequestFilter) => {
  const queryFilter = {...requestFilter, resource: '/users'};
  return axios({
    method: 'get',
    url: constructUrl(queryFilter)
  });
};

export const loginUser = (email: string , password: string) =>
  axios({
    data: {
      email,
      password,
      strategy: 'local'
    },
    method: 'post',
    url: '/login'
  });

export const logoutUser = () =>
  axios({
    method: 'post',
    url: '/logout'
  });
