'use strict';
// module.exports = (sequelize, DataTypes) => {
//   class Users extends Model {
//     static associate(models) {
//       this.hasMany(Questionnaires, {
//         foreignKey: 'user_id',
//         as: 'questionnaires'
//       })
//     }
//   };
//   Users.init({
//     name: DataTypes.STRING,
//     surname: DataTypes.STRING,
//     age: DataTypes.INTEGER,
//     country: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Users',
//   });
//   return Users;
// };

module.exports = (sequelize, DataTypes)=>{
  const Users = sequelize.define(
    'Users',{
      name: DataTypes.STRING,
  
      surname: DataTypes.STRING,
  
      age: DataTypes.INTEGER,
  
      country: DataTypes.STRING
    
  }, {
    freezeTableName: true
  })

  
  Users.associate = (models)=>{
    Users.hasMany(models.Questionnaires, {as: 'Users', foreignKey: 'user_id'})
  }

  return Users
}


