const app = require('express').Router();
const axios = require('axios');
const db = require('../config/db');
const DataTypes = require ('sequelize');
const { QueryTypes } = require('sequelize');
const Users = require('../models/users')(db.sequelize, DataTypes);
const Questionnaires = require('../models/questionnaires')(db.sequelize, DataTypes);


app.get('/usuario/cuestionario', (req,rep)=>{
    // let id = req.body.id
    // db.sequelize.query('SELECT Questionnaires.name AS Questionnaire, Questionnaires.type, Users.name, Users.surname, Users.age FROM Questionnaires JOIN Users ON Questionnaires.user_id = Users.id WHERE Users.id = ?', 
    // {replacements: [id], type: QueryTypes.SELECT})

    Questionnaires.findAll({
        attributes:['id', 'name', 'type'],
        include: [{
            model: Users,
            as: 'Users',
            required: true,
            attributes: ['name', 'surname']
        }]
    })


    .then((response)=>{
        rep.send(response)
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = app