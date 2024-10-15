import db from "../models";
import bcrypt from "bcryptjs";

// Thực hiện đăng nhập
const userLogin = async (email, password) => {
  const user = await db.models.NguoiDung.findOne({
    where: { email },
  });

  console.log("Check user: ", user.vaiTro);
  const role = user.vaiTro;

  const isMath = await bcrypt.compare(password, user.matKhau);

  if (user && isMath && role === "QuanTriVien") {
    return user;
  } else return;
};

// Tạo mới người dùng
const createNewUser = async (firstname, email, password, role) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.models.NguoiDung.create({
      tenNguoiDung: firstname,
      email: email,
      matKhau: hashedPassword,
      vaiTro: role,
    });
  } catch (e) {
    console.log("Error register: ", e);
    res.status(500).send("Lỗi đăng ký.");
  }
};

// Lấy danh sách sinh viên
const getListStudents = async () => {
  const listSinhVien = await db.models.NguoiDung.findAll({
    where: { vaiTro: "SinhVien" },
  });

  console.log("Check list sinh vien: ", listSinhVien);

  return listSinhVien;
};

module.exports = {
  createNewUser: createNewUser,
  userLogin: userLogin,
  getListStudents: getListStudents,
};
