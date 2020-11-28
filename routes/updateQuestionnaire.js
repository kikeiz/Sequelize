const app = require('express').Router();
const db = require('../config/db');
const DataTypes = require ('sequelize');
const Questionnaires = require('../models/questionnaires')(db.sequelize, DataTypes);
const Sequelize = require('sequelize');
const Op = Sequelize.Op

app.put('/questionnaire', (req,rep)=>{
    Questionnaires.update(
        {type: req.body.type},
        {where: {[Op.or] :[{id: req.body.id}, {id:2}]}
    })
    .then((rowsAffected)=>{
        rep.send(rowsAffected)
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = app