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
        hoTen: "Nguyen Van P",
        maSinhVien: "1851010566",
        email: "P@gmail.com",
        chuyenNganhId: 4,
        nguoiDungId: 18,
        soDienThoai: "0254789623",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      /*{
        hoTen: "Nguyen Van A",
        maSinhVien: "1851010144",
        email: "A@gmail.com",
        chuyenNganhId: 3,
        nguoiDungId: 16,
        soDienThoai: "0254789623",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hoTen: "Tran Thi B",
        maSinhVien: "1851010145",
        email: "B@gmail.com",
        chuyenNganhId: 4,
        nguoiDungId: 17,
        soDienThoai: "0254789623",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hoTen: "Le Van C",
        maSinhVien: "1851010146",
        email: "C@gmail.com",
        chuyenNganhId: 1,
        nguoiDungId: 18,
        soDienThoai: "0254789623",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hoTen: "Hoang Thi D",
        maSinhVien: "1851010147",
        email: "D@gmail.com",
        chuyenNganhId: 2,
        nguoiDungId: 19,
        soDienThoai: "0254789623",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hoTen: "Pham Van E",
        maSinhVien: "1851010148",
        email: "E@gmail.com",
        chuyenNganhId: 5,
        nguoiDungId: 20,
        soDienThoai: "0254789623",
        createdAt: new Date(),
        updatedAt: new Date(),
      },*/
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
