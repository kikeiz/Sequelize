'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
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
          allowNull: false,
          type: Sequelize.DATE
        }
      }),
      queryInterface.createTable('Questionnaires', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
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
          onUpdate: 'CASCADE',
          references:{
            model: 'Users',
            key: 'id'
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