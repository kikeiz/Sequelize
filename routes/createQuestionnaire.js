const app = require('express').Router();
const axios = require('axios');
const db = require('../config/db');
const DataTypes = require ('sequelize')
const Questionnaires = require('../models/questionnaires')(db.sequelize, DataTypes);
const Users = require('../models/users')(db.sequelize, DataTypes);

app.post('/questionnaire', (req,rep)=>{
    Users.findOne({
        where: {
            name: req.body.name
        }
    })
    .then((usuario)=>{
        Questionnaires.create({
            name: req.body.questionnaire_name,
            type: req.body.type,
            number_questions: req.body.number_questions,
            user_id: usuario.id
        })
    })
    .then((questionnaire)=>{
        rep.send("Questionario Añadido con éxito")
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = app