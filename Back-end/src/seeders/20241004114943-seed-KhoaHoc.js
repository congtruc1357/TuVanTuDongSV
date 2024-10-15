"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("KhoaHocs", [
      {
        tenKhoaHoc: "Lập trình web",
        moTa: "Khóa học về lập trình web sử dụng JavaScript",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenKhoaHoc: "Lập trình di động",
        moTa: "Khóa học về lập trình ứng dụng di động",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenKhoaHoc: "Trí tuệ nhân tạo",
        moTa: "Khóa học cơ bản về AI và ứng dụng trong cuộc sống",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenKhoaHoc: "An toàn mạng",
        moTa: "Khóa học về bảo mật hệ thống và an toàn mạng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenKhoaHoc: "Phát triển ứng dụng",
        moTa: "Khóa học phát triển phần mềm ứng dụng thực tế",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
