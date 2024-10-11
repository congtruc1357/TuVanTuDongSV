import userService from "../service/userService";

// Login
const getLogin = (req, res) => {
  res.render("login");
};

// Register
const getRegister = (req, res) => {
  res.render("register");
};

// Xử lý đăng ký
const postRegister = async (req, res) => {
  let firstname = req.body.firstname;
  let email = req.body.email;
  let password = req.body.password;
  let role = req.body.role;

  userService.createNewUser(firstname, email, password, role);
  return res.redirect("/login");
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  //const user = await db.NguoiDung.findOne({ where: { email } });
  const user = { email: "ABC@gmail.com", password: "123456" };

  if (email === user.email && user.password === password) {
    req.session.user = user; // Lưu thông tin người dùng vào session
    return res.redirect("/");
  } else {
    return res.render("/login", { error: "Sai email or password" });
  }
};

//Logout
const getLogout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};

// Home
const getHome = (req, res) => {
  res.render("home");
};

const getViewStudens = (req, res) => {
  res.render("viewStudents");
};

module.exports = {
  getRegister: getRegister,
  getLogin: getLogin,
  getLogout: getLogout,
  getHome: getHome,
  getViewStudens: getViewStudens,
  postLogin: postLogin,
  postRegister: postRegister,
};
