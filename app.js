const express = require('express');
const app = express();

const db = require ('./config/db')

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

//Routes

//UserCreateRoute
const createUser = require('./routes/createUser')

//QuestionnaireCreation
const createQuestionnaire = require('./routes/createQuestionnaire')

//FindInfoFromUser&Questionnaire
const findUserFromQuestionnaire = require('./routes/findUserFromQuestionnaire')

//DeleteQuestionnaire
const deleteQuestionnaire = require('./routes/deleteQuestionnaire')

//UpdateQuestionnaire
const UpdateQuestionnaire = require('./routes/updateQuestionnaire')

//Home
const Home = require ('./routes/home')

//Redirect OauthURL
const redirect = require('./routes/oauth-redirect');

//oauth-callback

const oauthCallback = require('./routes/oauth-token');

//clientCreate

const clientCreate = require('./routes/createClient')

//Credentials

const getToken = require('./services/Oauth2')





//middlewaresV1
app.use('/v1/prueba', createUser)
app.use('/v1/prueba', createQuestionnaire)
app.use('/v1/prueba', findUserFromQuestionnaire)
app.use('/v1/prueba', deleteQuestionnaire)
app.use('/v1/prueba', UpdateQuestionnaire)
app.use('/v1/prueba', Home)
app.use('/v1/prueba', redirect)
app.use('/v1/prueba', oauthCallback)
app.use('/v1/prueba', clientCreate)

//GettingToken
app.post('/v1/prueba/getToken', getToken.obtainToken, (req,rep)=>{
  console.log("Realizado");
})

//GivingToken


   


db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



app.listen(3000, ()=>{
    console.log("Servidor arrancado");
})
