// models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
    "User",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        profile_picture: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
        },
        last_seen: {
            type: DataTypes.DATE,
        },
    },
    {
        tableName: 'user',
        timestamps: false
    }
);

module.exports = User;