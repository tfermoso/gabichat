const User = require("./User");
const Group = require("./Group");
const Chat = require("./chat");
const Message = require("./Message");
const Group_participant=require("./GroupParticipant");

User.hasMany(Group, { foreignKey: "admin" });
Group.belongsTo(User, { foreignKey: "id" });

User.hasMany(Message, { foreignKey: "sender_id" });
Message.belongsTo(User, { foreignKey: "id" });

Chat.hasMany(Message, { foreignKey: "chat_id" });
Message.belongsTo(Chat, { foreignKey: "id" });

Group.hasMany(Message, { foreignKey: "group_id" });
Message.belongsTo(Group, { foreignKey: "id" });

Group.belongsToMany(User, { through: "group_participant" });
User.belongsToMany(Group, { through: "group_participant" });

Chat.belongsToMany(User, { through: "chat_participant" });
User.belongsToMany(Chat, { through: "chat_participant" });

module.exports = {
  User,
  Chat,
  Group,
  Message,
  Group_participant
};
