const app = require('express').Router();
const getToken = require('../services/tokenService');

app.post('/oauth/token', (req, res) => {
  getToken(req.headers.authorization)
  .then(token => res.status(200).send(token.data))
  .catch(err => res.status(404).send(err.data))
});

module.exports = app;