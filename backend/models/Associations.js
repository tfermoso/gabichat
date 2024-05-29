const User = require("./User");
const Group = require("./Group");
const Chat = require("./chat");
const Message = require("./Message");
const Group_participant = require("./group_participant");

User.hasMany(Group, { foreignKey: "admin" });
Group.belongsTo(User, { foreignKey: "id" });

User.hasMany(Message, { foreignKey: "sender_id" });
Message.belongsTo(User, { foreignKey: "id" });

Chat.hasMany(Message, { foreignKey: "chat_id" });
Message.belongsTo(Chat, { foreignKey: "id" });

Group.belongsToMany(User, {
  through: Group_participant,
  foreignKey: "group_id",
});
User.belongsToMany(Group, {
  through: Group_participant,
  foreignKey: "user_id",
});
Chat.belongsToMany(User, { through: "chat_participant" });
User.belongsToMany(Chat, { through: "chat_participant" });
