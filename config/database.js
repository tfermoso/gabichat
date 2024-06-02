const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gabichat', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

(async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexión a la base de datos ha sido establecida exitosamente.');
    } catch (error) {
      console.error('No se pudo conectar a la base de datos:', error);
    } 
  })();

module.exports = sequelize;

