import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./profile.scss";

const cx = classNames.bind(styles);

function Profile() {
  const [userData, setUserData] = useState({
    hoTen: "",
    maSinhVien: "",
    email: "",
    chuyenNganhId: "",
    soDienThoai: "",
  });

  const handleInputChange = () => {};

  return (
    <div className={cx("profile")}>
      <h2 className={cx("profile-title")}>Thông tin cá nhân</h2>
      <form className={cx("form-group")}>
        <div className={cx("form-goup_item")}>
          <label className={cx("form-group_label")}>Họ tên: </label>
          <input
            type="text"
            name="tenNguoiDung"
            className={cx("form-group_input")}
            value={userData.hoTen}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={cx("form-goup_item")}>
          <label className={cx("form-group_label")}>Mã sinh viên: </label>
          <input
            type="text"
            name="maSinhVien"
            className={cx("form-group_input")}
            value={userData.maSinhVien}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={cx("form-goup_item")}>
          <label className={cx("form-group_label")}>Email: </label>
          <input
            type="email"
            name="email"
            className={cx("form-group_input")}
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={cx("form-goup_item")}>
          <label className={cx("form-group_label")}>Chuyên ngành: </label>
          <input
            type="text"
            name="chuyenNganhId"
            className={cx("form-group_input")}
            value={userData.chuyenNganhId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={cx("form-goup_item")}>
          <label className={cx("form-group_label")}>Số điện thoại: </label>
          <input
            type="text"
            name="soDienThoai"
            className={cx("form-group_input")}
            value={userData.soDienThoai}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className={cx("profile-button")}>
          Cập nhật thông tin sinh viên
        </button>
      </form>
    </div>
  );
}

export default Profile;
