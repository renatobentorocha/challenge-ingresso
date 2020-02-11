import axios from 'axios';

const api = axios.create({
  baseURL: 'http://hidden-springs-30711.herokuapp.com',
});

export default api;
