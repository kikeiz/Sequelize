'use strict'
const {Sequelize, DataTypes} = require('sequelize');
const questionnaires = require('../models/questionnaires');
const users = require('../models/users');
const config = require('../config.json')['development']
const {database} = require ('./config')
const Op = Sequelize.Op;
const db = {}

const sequelize = new Sequelize(database.database, database.username, database.password
, {
    host: database.host,
    dialect: database.dialect,
    port: 3306,
})


module.exports = {
    sequelize,
    Op
}
