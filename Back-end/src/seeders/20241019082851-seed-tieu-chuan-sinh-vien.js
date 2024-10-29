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
    return queryInterface.bulkInsert("TieuChuanSinhViens", [
      {
        tieuChuanId: 1,
        sinhVienId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tieuChuanId: 2,
        sinhVienId: 19,
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
    return queryInterface.bulkDelete("TieuChuanSinhViens", null, {});
  },
};
