import axios from 'axios';

export const getUsers = () =>
  axios({
    method: 'get',
    url: '/users'
  });

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
