import db from "../models";
import bcrypt from "bcryptjs";

// Thực hiện đăng nhập
const userLogin = async (email, password) => {
  const user = await db.models.NguoiDung.findOne({
    where: { email },
  });

  const role = user.vaiTro;

  const isMath = await bcrypt.compare(password, user.matKhau);

  if (user && isMath /*&& role === "QuanTriVien"*/) {
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
  }
};

// Lấy danh sách sinh viên
const getListStudents = async () => {
  const listSinhVien = await db.models.NguoiDung.findAll({
    where: { vaiTro: "SinhVien" },
  });

  return listSinhVien;
};

//Tìm kiếm sinh viên
const findUser = async (id) => {
  const user = await db.models.NguoiDung.findByPk(id);

  if (user) return user;
};

const updateTTSV = async (
  hoTen,
  maSinhVien,
  email,
  chuyenNganhId,
  nguoiDungId
) => {
  await db.models.ThongTinSinhVien.update(
    {
      hoTen: hoTen,
      maSinhVien: maSinhVien,
      email: email,
      chuyenNganhId: chuyenNganhId,
      nguoiDungId: nguoiDungId,
    },
    { where: { idNguoiDung: nguoiDungId } }
  );
};

// Check mã số sinh viên
const checkMSSV = async () => {
  let count;
  let isMSSV = false;

  while (!isMSSV) {
    count = Math.floor(Math.random() * 1e10)
      .toString()
      .padStart(10, "0");
    const sv = await db.models.ThongTinSinhVien.findOne({
      where: { maSinhVien: count },
    });
    if (!sv) {
      isMSSV = true;
    }
  }

  return count;
};

// Xóa thông tin sinh viên trên bảng người dùng và thông tin sinh viên
const deleteStudent = async (id) => {
  await db.models.ThongTinSinhVien.destroy({ where: { idNguoiDung: id } });

  await db.models.NguoiDung.destroy({ where: { id: id } });
};

//Tìm thông tin dựa trên id sinh viên
const getUserInformation = async (id) => {
  await db.models.ThongTinSinhVien.findByPk(id);
};

module.exports = {
  createNewUser: createNewUser,
  userLogin: userLogin,
  getListStudents: getListStudents,
  findUser: findUser,
  updateTTSV: updateTTSV,
  deleteStudent: deleteStudent,
  checkMSSV: checkMSSV,
  getUserInformation: getUserInformation,
};
