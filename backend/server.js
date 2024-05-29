const sequelize = require("./config/database");
const {
  User,
  Chat,
  Group,
  Messsage,
  Group_participant,
} = require("./models/Associations");

const PORT = process.env.PORT || 3000;
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const session = require('express-session');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
// Configura el middleware para manejar datos JSON y datos codificados en URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Configura el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/public/views'));


app.use(express.static('public'));


(async () => {
  await sequelize.sync();
});

app.get("/login", (req, res) => {
res.render("login");
})

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
      if (!user) {
          return res.render('login', { error: 'Usuario o contraseña incorrecto' });
      }

    
      if (password != user.password) {
          return res.render('login', { error: 'Usuario o contraseña incorrecto' });
      }
    
      res.render('gabichat');
  } catch (error) {
      console.error(error);
      res.render('login', { error: 'Error de conexion a la base de datos' });
  }

})

app.get("/register",(req,res)=>{
  res.render("register");
  
})

app.post("/register", async (req, res) => {
  const {username,email,password}=req.body;
  console.log(username, email, password);

  try {
      await User.create({username, email, password});
      res.redirect("/login");
  } catch (error) {      
      res.render("register",{error:"Error de conexion a bbdd"});
  }
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
