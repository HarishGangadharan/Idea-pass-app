import axios from 'axios';

export const getUsers = () =>
  axios({
    method: 'get',
    url: '/users'
  });

export const loginUser = (data: any) =>
  axios({
    data,
    method: 'post',
    url: '/api/Financiers/login'
  });

export const logoutUser = () =>
  axios({
    method: 'post',
    url: 'api/Users/logout'
  });
