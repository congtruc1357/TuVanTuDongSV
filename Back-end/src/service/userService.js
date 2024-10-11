import db from "../models";

const createNewUser = async (firstName, email, password, role) => {
  console.log("Check nguoi dung: ", db.models.NguoiDung);
  try {
    await db.models.NguoiDung.create({
      tenNguoiDung: firstName,
      email: email,
      matKhau: password,
      vaiTro: role,
    });
  } catch (e) {
    console.log("Error register: ", e);
    res.status(500).send("Lỗi đăng ký.");
  }
};

module.exports = {
  createNewUser: createNewUser,
};
