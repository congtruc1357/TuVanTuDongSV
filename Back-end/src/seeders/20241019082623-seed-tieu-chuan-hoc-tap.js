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
    return queryInterface.bulkInsert("tieuchuanhoctaps", [
      {
        thangDiemHe10: 5.0,
        diemChu: "D",
        xepLoai: "Trung bình",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        thangDiemHe10: 7.0,
        diemChu: "C",
        xepLoai: "Khá",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        thangDiemHe10: 8.0,
        diemChu: "B",
        xepLoai: "Giỏi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        thangDiemHe10: 9.0,
        diemChu: "A",
        xepLoai: "Xuất sắc",
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
    return queryInterface.bulkDelete("tieuchuanhoctaps", null, {});
  },
};
