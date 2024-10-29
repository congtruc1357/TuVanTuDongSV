"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("LichSuTuVans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      noiDungTuVan: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      thoiGian: {
        type: Sequelize.DATE,
      },
      nguoiDungId: {
        type: Sequelize.INTEGER,
        references: {
          model: "NguoiDungs",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      tuVanId: {
        type: Sequelize.INTEGER,
        references: {
          model: "TuVans",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("LichSuTuVans");
  },
};
