'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.addColumn("User", "password", Sequelize.STRING);
        queryInterface.changeColumn("User", "name", {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        })
    },

    down: async (queryInterface, Sequelize) => {
        queryInterface.removeColumn("User", "password");
        queryInterface.changeColumn("User", "name", {
            type: Sequelize.STRING,
            allowNull: false,
        })
    }
};
