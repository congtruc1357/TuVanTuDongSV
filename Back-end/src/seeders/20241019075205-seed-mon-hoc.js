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
    return queryInterface.bulkInsert("monhocs", [
      {
        tenMonHoc: "Toán Cao Cấp",
        soTinChi: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenMonHoc: "Lập trình C",
        soTinChi: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenMonHoc: "Cơ sở dữ liệu",
        soTinChi: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenMonHoc: "Mạng máy tính",
        soTinChi: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenMonHoc: "Hệ điều hành",
        soTinChi: 4,
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
    return queryInterface.bulkDelete("monhocs", null, {});
  },
};
