const axios = require('axios');

const api = axios.default.create({
  baseURL: 'https://app.provi.com.br/v1/user'
});

export default api;
