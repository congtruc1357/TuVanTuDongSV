import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api";

const cx = classNames.bind(styles);

function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "SinhVien",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert("Đăng ký thành công!");
      navigate("/login");
    } catch (e) {
      alert(`Lỗi đăng ký: ${e.message}`);
    }
  };

  return (
    <div className={cx("container")}>
      <h1 className={cx("title")}>Đăng ký tài khoản</h1>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <div className={cx("form-group")}>
          <label className="form-label" htmlFor="firstname">
            Họ tên
          </label>
          <input
            className={cx("form-input")}
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Nhập tên sinh viên"
            required
          />
        </div>
        <div className={cx("form-group")}>
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className={cx("form-input")}
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Nhập địa chỉ email"
            required
          />
        </div>
        <div className={cx("form-group")}>
          <label className="form-label" htmlFor="password">
            Nhập mật khẩu
          </label>
          <input
            className={cx("form-input")}
            type="password"
            id="password"
            name="password"
            value={formData.matKhau}
            onChange={handleChange}
            placeholder="Nhập mật khẩu"
            required
          />
        </div>
        <div className={cx("form-group")}>
          <label className="form-label" htmlFor="confirmPassword">
            Nhập lại mật khẩu
          </label>
          <input
            className={cx("form-input")}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.xacNhanMatKhau}
            onChange={handleChange}
            placeholder="Nhập lại mật khẩu"
            required
          />
        </div>
        <div className={cx("form-group")}>
          <label className="form-label" htmlFor="role">
            Vai trò
          </label>
          <select
            className={cx("form-role")}
            id="role"
            name="role"
            value={formData.vaiTro}
            onChange={handleChange}
            required
          >
            <option value="SinhVien" className={cx("form-role_item")}>
              Sinh viên
            </option>
            <option value="QuanTriVien" className={cx("form-role_item")}>
              Quản trị viên
            </option>
          </select>
        </div>

        <button type="submit" className={cx("register-button")}>
          Đăng ký
        </button>

        <div className={cx("login-link")}>
          <p className={cx("login-account")}>
            Bạn đã có tài khoản?{" "}
            <Link to="/login" className={cx("login-a")}>
              Đăng nhập
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
