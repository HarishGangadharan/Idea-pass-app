import axios from 'axios';

export const getUsers = () => axios({
  method: 'get',
  url: '/users'
});
