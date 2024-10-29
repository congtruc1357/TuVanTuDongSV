import React from "react";
import classNames from "classnames/bind";
import styles from "./consult.scss";

const cx = classNames.bind(styles);

function Consult() {
  return (
    <div className={cx("consult-container")}>
      <h1 className={cx("consult-title")}>
        Tư vấn tự động sinh viên ngành công nghệ thông tin
      </h1>
      <p className={cx("consult-description")}>Nhập câu hỏi của bạn tại đây:</p>

      <div className={cx("question")}>
        <textarea
          id="question-input"
          className={cx("question-text")}
          placeholder="Nhập câu hỏi của bạn..."
          rows="5"
        ></textarea>
        <button className={cx("submit-button")}>Gửi câu hỏi</button>
      </div>

      <div className={cx("response")}>Ahihi</div>
    </div>
  );
}

export default Consult;
