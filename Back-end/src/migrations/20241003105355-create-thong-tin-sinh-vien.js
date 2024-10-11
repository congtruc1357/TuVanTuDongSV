"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ThongTinSinhViens", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hoTen: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      maSinhVien: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      idchuyenNganh: {
        type: Sequelize.INTEGER,
        references: {
          model: "ChuyenNganhs",
          key: "id",
        },
      },
      idNguoiDung: {
        type: Sequelize.INTEGER,
        references: {
          model: "NguoiDungs",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      soDienThoai: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ThongTinSinhViens");
  },
};
