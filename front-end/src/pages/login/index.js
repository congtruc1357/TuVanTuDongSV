import React, { useContext, useState } from "react";
import styles from "./login.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

const cx = classNames.bind(styles);

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { login } = useContext(AuthContext);
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
    setErrorMessage("");

    try {
      const userData = await loginUser(formData);
      login(userData.user);
      alert(userData.message);
      navigate("/");
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <div className={cx("container")}>
      <h1 className={cx("title")}>Đăng nhập</h1>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <div className={cx("form-group")}>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={cx("form-input")}
            value={formData.email}
            onChange={handleChange}
            placeholder="Nhập email"
            required
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="password" className="form-label">
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={cx("form-input")}
            value={formData.password}
            onChange={handleChange}
            placeholder="Nhập mật khẩu"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Đăng nhập
        </button>
        {errorMessage && <p className={cx("error-message")}>{errorMessage}</p>}
        <div className={cx("register-link")}>
          <p className={cx("register-account")}>
            Tạo tài khoản?
            <Link to="/register" className={cx("register-a")}>
              Đăng ký
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
