const seq = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config/conf").JWT_SECRET

class User extends seq.Model {
    static async getUserByToken(t){
        try {
            const u = jwt.verify(t, JWT_SECRET)
            console.log(u)
            return await User.findOne({where: {name: u.name}})
        } catch (err){
            console.log(err)
            return false
        }
    }
}

User.init({
    id: {
        type: seq.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: seq.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: seq.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db, modelName: "User"
});

module.exports = User;