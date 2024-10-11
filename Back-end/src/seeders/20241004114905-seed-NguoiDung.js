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
    return queryInterface.bulkInsert("nguoidungs", [
      {
        tenNguoiDung: "Nguyen Van A",
        email: "a.nguyen@example.com",
        matKhau: "123",
        vaiTro: "SinhVien",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenNguoiDung: "Tran Thi B",
        email: "b.tran@example.com",
        matKhau: "123",
        vaiTro: "SinhVien",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenNguoiDung: "Le Van C",
        email: "c.le@example.com",
        matKhau: "123",
        vaiTro: "SinhVien",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenNguoiDung: "Hoang Thi D",
        email: "d.hoang@example.com",
        matKhau: "123",
        vaiTro: "SinhVien",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenNguoiDung: "Pham Van E",
        email: "e.pham@example.com",
        matKhau: "123",
        vaiTro: "SinhVien",
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
    return queryInterface.bulkDelete("NguoiDungs", null, {});
  },
};
