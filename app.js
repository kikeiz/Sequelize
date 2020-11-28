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

//requireToken
const getToken = require('./routes/tokenRoute')


//middlewaresV1
app.use('/v1/prueba', createUser)
app.use('/v1/prueba', createQuestionnaire)
app.use('/v1/prueba', findUserFromQuestionnaire)
app.use('/v1/prueba', deleteQuestionnaire)
app.use('/v1/prueba', UpdateQuestionnaire)
app.use('/v1/prueba', getToken)
   


db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



app.listen(3019, ()=>{
    console.log("Servidor arrancado");
})
