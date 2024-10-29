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
    return queryInterface.bulkInsert("diems", [
      {
        monHocId: 6,
        thongTinSinhVienId: 16,
        diemSo: 8.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        monHocId: 7,
        thongTinSinhVienId: 17,
        diemSo: 7.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        monHocId: 8,
        thongTinSinhVienId: 18,
        diemSo: 9.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        monHocId: 9,
        thongTinSinhVienId: 19,
        diemSo: 6.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        monHocId: 10,
        thongTinSinhVienId: 20,
        diemSo: 7.8,
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
    return queryInterface.bulkDelete("diems", null, {});
  },
};
