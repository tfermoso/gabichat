module.exports.auth = (req, res, next) => {
    if (req.session.user) {
      return next();
    } else {
      res.redirect('/login?error=Inicie sesion para continuar');
    }
  };