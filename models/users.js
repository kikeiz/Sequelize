'use strict';

module.exports = (sequelize, DataTypes)=>{
  const Users = sequelize.define(
    'Users',{
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },

      name: DataTypes.STRING,
  
      surname: DataTypes.STRING,
  
      age: DataTypes.INTEGER,
  
      country: DataTypes.STRING, 

      username: DataTypes.STRING,

      password:DataTypes.STRING
    
  }, {
    freezeTableName: true
  })

  
  Users.associate = (models)=>{
    Users.hasMany(models.Questionnaires, {as:'Questionnaires', foreignKey:'user'})
  }

  return Users
}


