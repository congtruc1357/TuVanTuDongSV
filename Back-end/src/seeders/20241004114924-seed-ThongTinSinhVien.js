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
    return queryInterface.bulkInsert("ThongTinSinhViens", [
      {
        hoTen: "Nguyen Van A",
        maSinhVien: "1851010144",
        email: "A@gmail.com",
        idChuyenNganh: 3,
        idNguoiDung: 1,
        soDienThoai: "0254789623",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hoTen: "Tran Thi B",
        maSinhVien: "1851010145",
        email: "B@gmail.com",
        idChuyenNganh: 4,
        idNguoiDung: 2,
        soDienThoai: "0254789623",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hoTen: "Le Van C",
        maSinhVien: "1851010146",
        email: "C@gmail.com",
        idChuyenNganh: 1,
        idNguoiDung: 3,
        soDienThoai: "0254789623",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hoTen: "Hoang Thi D",
        maSinhVien: "1851010147",
        email: "D@gmail.com",
        idChuyenNganh: 2,
        idNguoiDung: 4,
        soDienThoai: "0254789623",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hoTen: "Pham Van E",
        maSinhVien: "1851010148",
        email: "E@gmail.com",
        idChuyenNganh: 5,
        idNguoiDung: 5,
        soDienThoai: "0254789623",
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
    return queryInterface.bulkDelete("ThongTinSinhViens", null, {});
  },
};
