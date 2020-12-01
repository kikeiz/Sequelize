'use strict'
const {Sequelize, DataTypes} = require('sequelize');
const questionnaires = require('../models/questionnaires');
const users = require('../models/users');
const config = require('../config.json')['development']
const {development} = require ('./config')
const Op = Sequelize.Op;
const db = {}

const sequelize = new Sequelize(development.database, development.username, development.password
, {
    host: development.host,
    dialect: development.dialect,
    port: 3306,
})


module.exports = {
    sequelize,
    Op
}
