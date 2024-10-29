import React from "react";
import classNames from "classnames/bind";
import styles from "./history.scss";

const cx = classNames.bind(styles);

function History() {
  return (
    <div className={cx("history")}>
      <h1 className={cx("history-title")}>Lịch sử tư vấn</h1>
      <p className={cx("sub-heading")}>Danh sách tư vấn của bạn: </p>

      <table className={cx("history-table")}>
        <thead>
          <tr className={cx("history-table_tr")}>
            <th className={cx("history-table_th")}>Ngày tư vấn: </th>
            <th className={cx("history-table_th")}>Câu hỏi: </th>
            <th className={cx("history-table_th")}>Kết quả tư vấn: </th>
            <th className={cx("history-table_th")}>Trạng thái: </th>
          </tr>
        </thead>
        <tbody>
          <tr className={cx("history-table_tr")}>
            <td className={cx("history-table_th")}>2024-10-20</td>
            <td className={cx("history-table_th")}>Điều kiện ra trường</td>
            <td className={cx("history-table_th")}>Điểm trung bình trên 4.0</td>
            <td className={cx("history-table_th")}>Hoàn thành</td>
          </tr>
          <tr className={cx("history-table_tr")}>
            <td className={cx("history-table_th")}>2024-10-21</td>
            <td className={cx("history-table_th")}>Số môn học còn thiếu</td>
            <td className={cx("history-table_th")}>Ngôn ngữ tin học</td>
            <td className={cx("history-table_th")}>Hoàn chờ</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default History;
