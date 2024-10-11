const checkLogin = (req, res, next) => {
  if (req.session.user) {
    return res.redirect("/");
  }
  next();
};

const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = {
  checkLogin: checkLogin,
  isAuthenticated: isAuthenticated,
};
