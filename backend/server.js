const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('frontend/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/public/views'));
// Array de usuarios ficticios
const users = [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
    { id: 3, username: 'user3', email: 'user3@example.com' }
];

app.get("/", (req, res) => {
    //res.sendFile(path.join(__dirname, 'public', 'login.html'));
    res.render('gabichat');
})

app.get('/login', (req, res) => {
    // Puedes enviar la página de login directamente si está en la carpeta de vistas
    res.sendFile(path.join(__dirname, '../frontend/public/login.html'));
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.render('login', { error: 'Usuario o contraseña incorrecto' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.render('login', { error: 'Usuario o contraseña incorrecto' });
        }
        req.session.user = user;
        res.redirect('/gabichat');
    } catch (error) {
        console.error(error);
        res.render('login', { error: 'Error de conexion a la base de datos' });
    }

})

app.get("/register", (req, res) => {
    let error = "";
    res.render("register", { error });
})

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    let usuario = new User({ name, email, password });
    try {
        await usuario.save();
        res.redirect("/login");
    } catch (error) {
        res.render("register", { error: "Error de conexion a bbdd" });
    }
})

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
// 