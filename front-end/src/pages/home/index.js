import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import classNames from "classnames/bind";
import styles from "./home.scss";

const cx = classNames.bind(styles);

function Home() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("Check user: ", user);

  // Xử lý đăng xuất
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={cx("home-container")}>
      <section className={cx("top-section")}>
        <h1 className={cx("title")}>
          Hệ thống tư vấn tự động sinh viên ngành CNTT
        </h1>

        <p className={cx("description")}>
          Chào mừng bạn đến với hệ thống tư vấn tự động! Hệ thống của chúng tôi
          giúp bạn có được những lời khuyên học tập tốt nhất, phù hợp với điểm
          số và mục tiêu học tập của bạn.
        </p>
        {user ? (
          <Link to="/consult" className={cx("consult-bt")}>
            Bắt đầu tư vấn
          </Link>
        ) : (
          <Link to="/login-required" className={cx("consult-bt")}>
            Bắt đầu tư vấn
          </Link>
        )}
      </section>

      <section className={cx("middle-section")}>
        {user ? (
          <div className={cx("user-info")}>
            <span>Chào, {user.tenNguoiDung}</span>
            <button onClick={handleLogout} className={cx("logout-button")}>
              Đăng xuất
            </button>
          </div>
        ) : (
          <div className={cx("section-grid")}>
            <Link to="/login" className={cx("card")}>
              <h3>Đăng nhập / Đăng ký</h3>
              <p>Kiểm tra thông tin của bạn</p>
            </Link>
          </div>
        )}
        {user ? (
          <div className={cx("section-grid")}>
            <Link to="/profile" className={cx("card")}>
              <h3>Thông tin cá nhân</h3>
              <p>Kiểm tra kiểm tra và cập nhật thông tin của bạn</p>
            </Link>
          </div>
        ) : (
          <div className={cx("section-grid")}>
            <Link to="/login-required" className={cx("card")}>
              <h3>Thông tin cá nhân</h3>
              <p>Kiểm tra kiểm tra và cập nhật thông tin của bạn</p>
            </Link>
          </div>
        )}
        {user ? (
          <div className={cx("section-grid")}>
            <Link to="/courses" className={cx("card")}>
              <h3>Danh sách chương trình học</h3>
              <p>Kiểm tra thông tin của bạn</p>
            </Link>
          </div>
        ) : (
          <div className={cx("section-grid")}>
            <Link to="/login-required" className={cx("card")}>
              <h3>Danh sách chương trình học</h3>
              <p>Kiểm tra thông tin của bạn</p>
            </Link>
          </div>
        )}
        {user ? (
          <div className={cx("section-grid")}>
            <Link to="/history" className={cx("card")}>
              <h3>Lịch sử tư vấn</h3>
              <p>Danh sách lịch sử tư vấn</p>
            </Link>
          </div>
        ) : (
          <div className={cx("section-grid")}>
            <Link to="/login-required" className={cx("card")}>
              <h3>Lịch sử tư vấn</h3>
              <p>Danh sách lịch sử tư vấn</p>
            </Link>
          </div>
        )}
        <div className={cx("section-grid")}>
          <Link to="/guide" className={cx("card")}>
            <h3>Hướng dẫn sử dụng</h3>
            <p>Cách sử dụng hệ thống hiệu quả</p>
          </Link>
        </div>
        <div className={cx("section-grid")}>
          <Link to="/support" className={cx("card")}>
            <h3>Liên hệ hỗ trợ</h3>
            <p>Liên hệ với chúng tôi để được hỗ trợ</p>
          </Link>
        </div>
      </section>

      <section className="announcement-section">
        <h2>Thông Báo & Sự Kiện</h2>
        <div className="announcements">
          <div className="announcement">
            <h3>Sự kiện tư vấn chuyên ngành</h3>
            <p>
              Tham gia các sự kiện tư vấn dành riêng cho sinh viên ngành CNTT.
            </p>
          </div>
          <div className="announcement">
            <h3>Thông báo từ nhà trường</h3>
            <p>Những thông tin mới nhất và quan trọng từ nhà trường.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
