/**
 * Configuration.
 */

const user = require('./models/users');
const client = require('./models/clients');
const tokenAuth = require('./models/tokens');
const db = require('./config/db');
const { QueryTypes } = require('sequelize');
const app = require ('express').Router()




db.sequelize.authenticate()
 .then(() => console.log('Connection has been established successfully.'))
 .catch((err) => console.error('Unable to connect to the database:', err));


const config = {
 clients: [
   {
     id: 'application', // TODO: Needed by refresh_token grant, because there is a bug at line 103 in https://github.com/oauthjs/node-oauth2-server/blob/v3.0.1/lib/grant-types/refresh-token-grant-type.js (used client.id instead of client.clientId)
     clientId: 'application',
     clientSecret: 'secret',
     grants: ['password', 'refresh_token'],
     redirectUris: [],
   },
 ],
 confidentialClients: [
 ],
 tokens: [],
 users: [
   {
     username: 'giunti',
     password: 'giunti',
   },
 ],
};


// tokenAuth.findAll({
//       include: [{
//            model: user
//        }]
//     })
//     .then((tokens) => 
//    {console.log(tokens);})
//     .catch(console.error);

    // db.sequelize.query('SELECT clientId ,clientSecret FROM clients',
    // { type: QueryTypes.SELECT })
    // The query returns a Promise with the row found.
    // .then((datos) =>{
    //       for (var object in datos) { 
    //           datos[object].grants=['password', 'client_credentials'];
    //           datos[object].redirectUris=[]
    //        }
    //        config.confidentialClients=datos;
    //        console.log(datos);
    // })



/**
* Dump the memory storage content (for debug).
*/

const dump = function () {
 console.log('clients', config.clients);
 console.log('confidentialClients', config.confidentialClients);
 console.log('tokens', config.tokens);
 console.log('users', config.users);
};

/*
* Methods used by all grant types.
*/

const getAccessToken = function (token) {
 const tokens = config.tokens.filter(function (savedToken) {
   return savedToken.accessToken === token;
 });

 return tokens[0];
};

const getClient = function (clientId, clientSecret) {
  // tokenAuth.findAll(include: [{
  //         model: user,
  //         required: true,  //true or false for required 
  //         where:{id:$id}

  //     }, {
  //         model: client,
  //         required: true, //true or false for required 
  //         where:{id:$id}
  //     }])
  //  .then((tokens) => 
  // {
   const clients = config.clients.filter(function (client) {
     return client.clientId === clientId && client.clientSecret === clientSecret;
   });

   const confidentialClients = config.confidentialClients.filter(function (client) {
   
     return client.clientId === clientId && client.clientSecret === clientSecret;
   });

   return clients[0] || confidentialClients[0];
  // });
};

const saveToken = function (token, client, user) {
 token.client = {
   id: client.clientId,
 };

 token.user = {
   username: user.username,
 };

 config.tokens.push(token);

 return token;
};

/*
* Method used only by password grant type.
*/

const getUser = function (username, password) {
 const users = config.users.filter(function (user) {
   return user.username === username && user.password === password;
 });

 return users[0];
};

/*
* Method used only by client_credentials grant type.
*/

const getUserFromClient = function (client) {
 const clients = config.confidentialClients.filter(function (savedClient) {
   return (
     savedClient.clientId === client.clientId &&
     savedClient.clientSecret === client.clientSecret
   );
 });

 return clients.length;
};

/*
* Methods used only by refresh_token grant type.
*/

const getRefreshToken = function (refreshToken) {
 const tokens = config.tokens.filter(function (savedToken) {
   return savedToken.refreshToken === refreshToken;
 });

 if (!tokens.length) {
   return;
 }

 return tokens[0];
};

const revokeToken = function (token) {
 config.tokens = config.tokens.filter(function (savedToken) {
   return savedToken.refreshToken !== token.refreshToken;
 });

 const revokedTokensFound = config.tokens.filter(function (savedToken) {
   return savedToken.refreshToken === token.refreshToken;
 });

 return !revokedTokensFound.length;
};

/**
* Export model definition object.
*/

module.exports = {
 getAccessToken: getAccessToken,
 getClient: getClient,
 saveToken: saveToken,
 getUser: getUser,
 getUserFromClient: getUserFromClient,
 getRefreshToken: getRefreshToken,
 revokeToken: revokeToken,
 app
};