const sequelize = require("./config/database");
const User = require("./models/User");

(async () => {
  try {
    

    // Sincronizar el modelo
    await User.sync();

    // Crear un nuevo usuario
    const newUser = await User.create({
      username: "John",
      email: "john.doe@example.com",
      password: "1234",
    });
    console.log("Nuevo usuario creado:", newUser.toJSON());

    // Leer usuarios
    const users = await User.findAll();
    console.log("Lista de usuarios:", users.map(user => user.toJSON()));
    
  } catch (error) {
    console.error("Error en la operación:", error);
  } finally {
    // Cerrar la conexión después de que todas las operaciones hayan terminado
    await sequelize.close();
    console.log('Conexión a la base de datos ha sido cerrada.');
  }
})();
