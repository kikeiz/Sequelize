const app = require('express').Router();
const axios = require('axios');
const db = require('../config/db');
const DataTypes = require ('sequelize');
const Questionnaires = require('../models/questionnaires')(db.sequelize, DataTypes);

app.delete('/questionnaire/delete/:ID', (req,rep)=>{
    Questionnaires.destroy({
        where: {
            id: req.params.ID
        }
    })
    .then(()=>{
        rep.send("Borrado con éxito")
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = app