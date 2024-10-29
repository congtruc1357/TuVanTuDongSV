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

// Xử lý đăng nhập
const postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userService.userLogin(email, password);

    if (user) {
      req.session.user = user; // Lưu thông tin người dùng vào session
      //return res.redirect("/");
      return res.status(200).json({
        message: "Đăng nhập thành công",
        user: {
          id: user.id,
          tenNguoiDung: user.tenNguoiDung,
          email: user.email,
          vaiTro: user.vaiTro,
        },
      });
    } else {
      //return res.render("login", { error: "Sai email or password" });
      return res.status(401).json({
        message: "Sai email hoặc mật khẩu",
      });
    }
  } catch (e) {
    return res.status(500).json({
      message: "Lỗi server",
      error: e,
    });
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

    console.log("check req.session: ", await req.session.user);
    const tenNguoiDung = await req.session.user.tenNguoiDung;

    const DSSinhVien = await userService.getListStudents();

    res.render("views-students", { tenNguoiDung, DSSinhVien });
  } catch (e) {
    console.log("Lỗi lấy danh sách sinh viên: ", e);
    res.status(500).send("Lỗi lấy danh sách sinh viên");
  }
};

// Tìm sinh viên
const getEditStudent = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await userService.findUser(userId);
    const tenNguoiDung = user.tenNguoiDung;

    if (!user) return res.status(404).send("Không tìm thấy sinh viên");

    res.render("edit-student", { user, tenNguoiDung });
  } catch (e) {
    console.log("Lỗi edit sinh viên: ", e);
    res.status(500).send("Error edit.");
  }
};

// Sửa thông tin sinh viên
const postEditStudent = async (req, res) => {
  const id = req.params.id;
  const { tenNguoiDung, email, vaiTro } = req.body;

  try {
    const user = await userService.findUser(id);
    if (!user) return res.status(404).send("Không tìm thấy người dùng.");

    await user.update({
      tenNguoiDung: tenNguoiDung,
      email: email,
      vaiTro: vaiTro,
    });

    /*if (vaiTro === "SinhVien") {
      const count = await userService.checkMSSV();
      console.log("check count: ", count);
      await userService.updateTTSV(
        user.tenNguoiDung,
        count,
        user.email,
        "1",
        user.id
      );
    }*/

    res.redirect("/view-students");
  } catch (e) {
    console.log("Lỗi update thông tin người dùng: ", e);
    res.status(500).send("Lỗi server.");
  }
};

// Lấy thông tin sinh viên từ bảng sinh viên
const getViewUserInformation = async (req, res) => {
  try {
    const sinhVienId = req.params.id;

    const sinhVien = await userService.getUserInformation(sinhVienId);

    if (sinhVien) {
      res.render("view-student-detail", { sinhVien });
    } else {
      res.redirect("/view-students");
    }
  } catch (error) {}
};

// Xóa sinh viên
const deleteStudent = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userService.findUser(id);
    if (!user) return res.status(404).send("Không tìm thấy người dùng.");

    await userService.deleteStudent(user.id);

    res.redirect("/view-students");
  } catch (e) {
    console.log("Lỗi xóa người dùng");
    res.status(500).send("Error delete student.");
  }
};

module.exports = {
  getRegister: getRegister,
  getLogin: getLogin,
  getLogout: getLogout,
  getHome: getHome,
  getViewStudens: getViewStudens,
  getEditStudent: getEditStudent,
  getViewUserInformation: getViewUserInformation,
  postLogin: postLogin,
  postRegister: postRegister,
  postEditStudent: postEditStudent,
  deleteStudent: deleteStudent,
};
