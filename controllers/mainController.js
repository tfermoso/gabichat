
exports.getGabichat = (req, res) => {
  const { id, username, email, profile_picture, status } = req.session.user;
  res.render("gabichat", { id, username, email, profile_picture, status });
};