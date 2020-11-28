'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('Users', {
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING
        },
        surname: {
          type: Sequelize.STRING
        },
        age: {
          type: Sequelize.INTEGER
        },
        country: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }),
      queryInterface.createTable('Questionnaires', {
        queryId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING
        },
        type: {
          type: Sequelize.STRING
        },
        number_questions: {
          type: Sequelize.INTEGER
        },
        user_id: {
          type: Sequelize.INTEGER,
          references:{
            model: 'Users',
            key: 'userId'
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),
    ])
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('Questionnaires');
  }
};