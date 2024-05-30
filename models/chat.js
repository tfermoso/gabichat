const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Chat = sequelize.define(
  "Chat",
  {
    type: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
  },
  {
    tableName: "chat",
    timestamps: false,
  }
);

module.exports = Chat;
