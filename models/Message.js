const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Message = sequelize.define(
  "Message",
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sent_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    chat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "chat",
        key: "id",
      },
    },
    group_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "group",
        key: "id",
      },
    },
  },
  {
    tableName: "message",
    timestamps: false,
  }
);

module.exports = Message;
