'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    Promise.all([
      queryInterface.createTable('Users', {
        user_id: {
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
        username: {
          type: Sequelize.STRING
        },
        password: {
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
        questionnaire_id: {
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
        user: {
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          references:{
            model: 'Users',
            key: 'user_id'
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
      queryInterface.createTable('Clients', {
        client_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        clientId: {
          type: Sequelize.STRING
        },
        clientSecret: {
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
      queryInterface.createTable('Tokens', {
        token_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        accessToken: {
          type: Sequelize.STRING
        },
        accessTokenExpiresAt: {
          type: Sequelize.DATE
        },
        refreshToken: {
          type: Sequelize.STRING
        },
        refreshTokenExpiresAt: {
          type: Sequelize.DATE
        },
        client: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Clients',
            key: 'client_id'
           },
           onUpdate: 'cascade',
           onDelete: 'cascade'
        },
        user: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'user_id'
           },
        onUpdate: 'cascade',
        onDelete: 'cascade'
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
    ])
  
  },

  down: async (queryInterface, Sequelize) => {
    Promise.all([
      queryInterface.dropTable('Questionnaires'),
      queryInterface.dropTable('Users'),
      queryInterface.dropTable('Clients'),
      queryInterface.dropTable('Tokens')
    ])
  }
};
