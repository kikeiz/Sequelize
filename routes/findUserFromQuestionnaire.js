const app = require('express').Router();
const axios = require('axios');
const db = require('../config/db');
const DataTypes = require ('sequelize');
const Users = require('../models/users')(db.sequelize, DataTypes);
const Questionnaires = require('../models/questionnaires')(db.sequelize, DataTypes);


app.get('/usuario/cuestionario', (req,rep)=>{
    Questionnaires.findAll({
        attributes:['id', 'name', 'type'],
        include: [{
            model: Users,
            as: 'Users',
            required: true,
            attributes: ['name', 'surname']
        }],
        group: ['id']
    })


    .then((response)=>{
        rep.send(response)
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = app