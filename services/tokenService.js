const axios = require('axios');
const qs = require('querystring');

const getToken = (client_id) => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': client_id
    }
  }

  const requestBody = {
    'grant_type': 'client_credentials',
    'clientId':client_id
  }

  return axios({
    method: 'post',
    url: '/api/v1/prueba/oauth/token',
    data: qs.stringify(requestBody),
    headers: config.headers
  })
};

module.exports = getToken;