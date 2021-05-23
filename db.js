// const { Sequelize } = require('sequelize');
//
//
// const db = new Sequelize('noob_db', 'root', '1234', {
//     host: 'localhost',
//     dialect:'mysql'
// });
//
//
// module.exports = db;



const seq = require("sequelize");

const db = new seq("noob_db", "root", "1234", {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;