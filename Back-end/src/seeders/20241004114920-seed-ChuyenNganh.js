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
    return queryInterface.bulkInsert("ChuyenNganhs", [
      {
        tenChuyenNganh: "Công nghệ thông tin",
        moTa: "Ngành chuyên về phát triển hệ thống thông tin và phần mềm",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenChuyenNganh: "An toàn thông tin",
        moTa: "Ngành chuyên về bảo mật và an toàn thông tin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenChuyenNganh: "Công nghệ phần mềm",
        moTa: "Ngành chuyên về phát triển và thiết kế phần mềm",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenChuyenNganh: "Khoa học máy tính",
        moTa: "Nghiên cứu về các lý thuyết khoa học máy tính và ứng dụng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tenChuyenNganh: "Mạng máy tính",
        moTa: "Ngành chuyên về mạng máy tính và truyền thông",
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
