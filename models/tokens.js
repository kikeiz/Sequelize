const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Token = db.sequelize.define(
  'Tokens',
  {
    token_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    accessToken: {
      type: DataTypes.STRING,
    },
    accessTokenExpiresAt: {
      type: DataTypes.DATE,
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    refreshTokenExpiresAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    client: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    user: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);

module.exports = Token;