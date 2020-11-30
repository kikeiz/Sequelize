const { response } = require('express');
const express = require('express');
const app = express();
const OAuth2Server = require('oauth2-server');
const Request = OAuth2Server.Request;
const Response = OAuth2Server.Response;
const db = require('../config/db');
const tokenAuth = require('../models/tokens');
const client = require('./../models/clients');


db.sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));

app.oauth = new OAuth2Server({
  model: require('../model'),
  accessTokenLifetime: 60 * 60,
  allowBearerTokensInQueryString: true,
});


async function obtainToken(req, res) {
  let request = new Request(req);
  let response = new Response(res);
  const base64 = req.headers.authorization.split(' ');
  console.log(base64);
  const buff = new Buffer.from(base64[1], 'base64');
  console.log(buff);
  const clientCredentials = buff.toString('ascii').split(':');
  console.log(clientCredentials);

  const clientid = await client.findOne({
    where: { clientId: clientCredentials[0]}})
  .catch((err) => console.log(err));
  return app.oauth
    .token(request, response)
    .then(async (token) => {
        console.log(token);
      await tokenAuth.create({
            accessToken: token.accessToken,
            accessTokenExpiresAt: token.accessTokenExpiresAt,
            refreshToken: null,
            refreshTokenExpiresAt: null,
            clientId: clientid.idClient,
            userId: null,
          });
      
      res.json({
        statusOk:true,
        code:"1000",
        message: "response completed correctly",
        data: {
          accessToken: token.accessToken,
          accessTokenExpiresAt: token.accessTokenExpiresAt,
        },
      });
    })
    .catch(function (err) {
      res.status(err.code || 500).json(err);
    });
}

async function authenticateRequest(req, res, next) {
  clientId=req.body.clientId;
  if(!clientId){
    res.status(500).json("clientId is mandatory");
  }
  accessToken=req.headers.authorization.split(' ')[1];
  const clientid = await client.findOne({
    where: { clientId: clientId}});
    if(!clientid){
      res.status(500).json("Error in clientId");
    }
    var request = new Request(req);
    var response = new Response(res);
    return app.oauth
      .authenticate(request, response)
      .then(function (token) {
        db.query(`SELECT c.clientId from tokens t
                  join clients c where c.idClient = t.clientId 
                  and t.accessToken = '${accessToken}'and c.clientId = '${clientid.dataValues.clientId}' Limit 1;`)
                  .then((datos)=>{
                    if(datos[0][0].clientId==clientid.dataValues.clientId){
                      res.send('Allowed');
                    }
                    else{
                      res.status(err.code || 500).json(err);
                    }
                  })
                  .catch((err)=> console.log(res.status(err.code || 500).json(err)));
      })
      .catch(function (err) {
        res.status(err.code || 500).json(err);
      }); 
  
}


module.exports = { obtainToken, authenticateRequest };