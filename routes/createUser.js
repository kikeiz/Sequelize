const app = require('express').Router();
const axios = require('axios');
const db = require('../config/db');
const Users = require('../models/users');
const DataTypes = require ('sequelize')



app.post('/usuario', (req,res)=>{
    Users(db.sequelize, DataTypes).create({
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        points: req.body.points,
        country: req.body.country
    })
    .then(response=>{
        res.send(response);
    })
    .catch(err=>{
        console.log(err);
    })
})



module.exports = app;