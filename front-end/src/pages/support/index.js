import React from "react";
import classNames from "classnames/bind";
import styles from "./support.scss";

const cx = classNames.bind(styles);

function Support() {
  return (
    <div className={cx("support")}>
      <h2 className={cx("support-title")}>Liên hệ hỗ trợ</h2>
      <p className={cx("support-description")}>
        Mọi thắc mắc trong quá trình sử dụng sinh viên có thể liên hệ qua các
        thông tin dưới đây:
      </p>
      <div className={cx("support-info")}>
        <p className={cx("support-item")}>
          <strong className={cx("support-s")}>Email:</strong>pqldt@ou.edu.vn
        </p>
        <p className={cx("support-item")}>
          <strong className={cx("support-s")}>Địa chỉ: </strong>97 Võ Văn Tần,
          quận 3, thành phố Hồ Chí Minh
        </p>
      </div>
      <p className={cx("support-description")}>
        Sinh viên có thể truy cập vào mục hỗ trợ giúp để xem các câu hỏi hay gặp
      </p>
    </div>
  );
}

export default Support;
