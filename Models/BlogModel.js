// const db = require('../db');
// const {Sequelize, DataTypes, Model} = require('sequelize');
//
// class Blog extends Model {
// }
//
// Blog.init({
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         allowNull: false,
//         autoIncrement: true
//     },
//     title: {
//         type: DataTypes.STRING(100),
//         allowNull: false
//     },
//     content: {
//         type: DataTypes.STRING(2560),
//         allowNull: false
//     },
//     userId: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }
//
// }, {
//     sequelize: db, modelName: "Blog"
// });
//
//
// module.exports = Blog;


const seq = require("sequelize");
const db = require("../db");

class Blog extends seq.Model{

}

Blog.init({
    id: {
        type: seq.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    userId: {
        type: seq.DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: seq.DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: seq.DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: db, modelName: "Blog"
});

module.exports = Blog;