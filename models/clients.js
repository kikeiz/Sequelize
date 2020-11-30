'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Client = db.sequelize.define('Clients', {
  client_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  clientId: {
    type: DataTypes.STRING,
  },
  clientSecret: {
    type: DataTypes.STRING,
  }
},{
});

module.exports = Client
