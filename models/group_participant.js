const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const groupParticipant = sequelize.define(
  "groupParticipant",
  {
    joined_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "group",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    tableName: "group_participant",
    timestamps: false,
  }
);

module.exports = groupParticipant;
