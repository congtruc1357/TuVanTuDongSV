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
    return queryInterface.bulkInsert("diemtrungbinhs", [
      {
        thongTinSinhVienId: 20,
        diemTrungBinh: 8.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      /*{
        thongTinSinhVienId: 16,
        diemTrungBinh: 7.75,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        thongTinSinhVienId: 17,
        diemTrungBinh: 9.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        thongTinSinhVienId: 18,
        diemTrungBinh: 6.9,
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
    return queryInterface.bulkDelete("diemtrungbinhs", null, {});
  },
};
