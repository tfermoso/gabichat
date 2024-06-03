// models/groupParticipant.js
module.exports = (sequelize, DataTypes) => {
    const GroupParticipant = sequelize.define('GroupParticipant', {
      // define your columns
      GroupId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Groups', // nombre del modelo que se referencia
          key: 'id'
        }
      },
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users', // nombre del modelo que se referencia
          key: 'id'
        }
      }
    }, {
        tableName: 'group_participant'
    });
  
    return GroupParticipant;
  };
  