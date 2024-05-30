const bcrypt = require('bcrypt');
const { User } = require('../models/Associations');

exports.getLogin = (req, res) => {
  const error = req.query.error || null;
  res.render("login", { error });
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.render('login', { error: 'Usuario o contraseña incorrecto' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.render('login', { error: 'Usuario o contraseña incorrecto' });
    }

    req.session.user = user;
    res.redirect('/gabichat');
  } catch (error) {
    res.render('login', { error: 'Error de conexión a la base de datos' });
  }
};

exports.getRegister = (req, res) => {
  res.render("register", { error: null });
};

exports.postRegister = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword, status: 'disponible' });
    res.redirect("/login");
  } catch (error) {
    res.render("register", { error: "Error de conexión a BBDD" });
  }
};
