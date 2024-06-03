const User = require("./User");
const Group = require("./Group");
const Chat = require("./Chat");
const Message = require("./Message");
const GroupParticipant = require("./GroupParticipant");

// Asociaciones para Group y User
User.hasMany(Group, { foreignKey: "admin" });  // Cambié "admin" a "adminId" por claridad
Group.belongsTo(User, { foreignKey: "id" });

// Asociaciones para Message y User
User.hasMany(Message, { foreignKey: "sender_id" });  // Cambié "sender_id" a "senderId" por consistencia
Message.belongsTo(User, { foreignKey: "id" });

// Asociaciones para Message y Chat
Chat.hasMany(Message, { foreignKey: "chat_id" });  // Cambié "chat_id" a "chatId" por consistencia
Message.belongsTo(Chat, { foreignKey: "id" });

// Asociaciones para Message y Group
Group.hasMany(Message, { foreignKey: "group_id" });  // Cambié "group_id" a "groupId" por consistencia
Message.belongsTo(Group, { foreignKey: "id" });

// Relación muchos a muchos entre Group y User a través de GroupParticipant
Group.belongsToMany(User, { through: GroupParticipant, foreignKey: "UserId", otherKey: "id" });

// Relación muchos a muchos entre Chat y User a través de ChatParticipant
Chat.belongsToMany(User, { through: ChatParticipant, foreignKey: "ChatId", otherKey: "UserId" });
User.belongsToMany(Chat, { through: ChatParticipant, foreignKey: "UserId", otherKey: "ChatId" });

module.exports = {
  User,
  Chat,
  Group,
  Message,
  GroupParticipant,
  ChatParticipant
};
