// const db = require ('../config/db')
'use strict';
const {Model, DataTypes} = require('sequelize');
const db = require('../config/db');
const Users = require('./users');

// module.exports = (sequelize, DataTypes) => {
//   class Questionnaires extends Model {
//     static associate(models) {
//       this.belongsTo(Users, {foreignKey: 'user_id'})
//     }
//   };

//   Questionnaires.init({
//     name: DataTypes.STRING,
//     type: DataTypes.STRING,
//     number_questions: DataTypes.INTEGER,
//     user_id:DataTypes.INTEGER

//   }, {
//     sequelize,
//     modelName: 'Questionnaires',
//   });

 
//   return Questionnaires;
// };

module.exports = (sequelize, DataTypes) =>{
  const Questionnaires = sequelize.define(
    'Questionnaires', {
    name: DataTypes.STRING,

    type: DataTypes.STRING,

    number_questions: DataTypes.INTEGER,

    user_id:DataTypes.INTEGER
  
    }
  )

  Questionnaires.associate = (models) => {
    Questionnaires.belongsTo(models.Users, {as:'Users', foreignKey: 'user_id'})
  }

  return Questionnaires
}





