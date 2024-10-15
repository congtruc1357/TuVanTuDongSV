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

  console.log("check body: ", req.body);

  userService.createNewUser(firstname, email, password, role);

  return res.redirect("/login");
};

// Xử lý đăng nhập
const postLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.userLogin(email, password);

  if (user) {
    req.session.user = user; // Lưu thông tin người dùng vào session
    return res.redirect("/");
  } else {
    return res.render("login", { error: "Sai email or password" });
  }
};

//Logout
const getLogout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};

// Home
const getHome = (req, res) => {
  if (!req.session.id) {
    return res.redirect("/login");
  }
  const tenNguoiDung = req.session.user.tenNguoiDung;
  res.render("home", { tenNguoiDung });
};

//Get view-students
const getViewStudens = async (req, res) => {
  try {
    if (!req.session.id) {
      return res.redirect("/login");
    }
    const tenNguoiDung = await req.session.user.tenNguoiDung;

    const DSSinhVien = await userService.getListStudents();

    res.render("views-students", { tenNguoiDung, DSSinhVien });
  } catch (e) {
    console.log("Lỗi lấy danh sách sinh viên: ", e);
    res.status(500).send("Lỗi lấy danh sách sinh viên");
  }
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
