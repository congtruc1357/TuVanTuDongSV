import React from "react";
import classNames from "classnames/bind";
import styles from "./guide.scss";

const cx = classNames.bind(styles);

function Guide() {
  return (
    <div className={cx("guide")}>
      <h2 className={cx("guide-title")}>Hướng dẫn sử dụng hệ thống</h2>
      <section className={cx("guide-item")}>
        <h3 className={cx("guide-item_title")}>1. Đăng ký, đăng nhập</h3>
        <p className={cx("guide-item_description")}>
          Sinh viên phải đăng ký, đăng nhập mới có thể sử dụng hệ thống
        </p>
      </section>
      <section className={cx("guide-item")}>
        <h3 className={cx("guide-item_title")}>
          2. Xem và cập nhật thông tin sinh viên
        </h3>
        <p className={cx("guide-item_description")}>
          Sinh viên có thể xem thông tin cá nhân sau khi đăng nhập
        </p>
      </section>
      <section className={cx("guide-item")}>
        <h3 className={cx("guide-item_title")}>3. Tư vấn tự động</h3>
        <p className={cx("guide-item_description")}>
          Sinh viên có thể đặt câu hỏi hoặc xem gợi ý tư vấn về học tập theo
          chương trình học
        </p>
      </section>
      <section className={cx("guide-item")}>
        <h3 className={cx("guide-item_title")}>4. Đăng xuất</h3>
        <p className={cx("guide-item_description")}>
          Sau khi hoàn tất quá trình tư vấn sinh viên có thể đăng xuất khỏi hệ
          thống
        </p>
      </section>
    </div>
  );
}

export default Guide;
