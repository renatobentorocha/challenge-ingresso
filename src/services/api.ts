import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hidden-springs-30711.herokuapp.com/',
});

export default api;
