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

export const loginUser = (username: string , password: string) =>
  axios({
    data: {
      password,
      username
    },
    method: 'post',
    url: '/login'
  });

export const logoutUser = () =>
  axios({
    method: 'post',
    url: '/logout'
  });
