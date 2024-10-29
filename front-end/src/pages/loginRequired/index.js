import classNames from "classnames/bind";
import styles from "./loginRequired.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function LoginRequired() {
  return (
    <div className={cx("container")}>
      <div className={cx("message")}>
        <h1 className={cx("message-title")}>
          Vui lòng đăng nhập để sử dụng hệ thống
        </h1>
        <Link to="/" className={cx("home-button")}>
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
}

export default LoginRequired;
