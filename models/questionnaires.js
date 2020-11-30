'use strict';

module.exports = (sequelize, DataTypes) =>{
  const Questionnaires = sequelize.define(
    'Questionnaires', {
    questionnaire_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,

    type: DataTypes.STRING,

    number_questions: DataTypes.INTEGER,

    user:DataTypes.INTEGER
  
    },{
      freezeTableName: true
    })

  Questionnaires.associate = (models) => {
    Questionnaires.belongsTo(models.Users, {as:'Users', foreignKey: 'user'})
  }

  return Questionnaires
}





