"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ThongTinSinhVien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ThongTinSinhVien.belongsTo(models.ChuyenNganh, {
        foreignKey: "chuyenNganhId",
      });
      ThongTinSinhVien.belongsTo(models.NguoiDung, {
        foreignKey: "nguoiDungId",
      });
    }
  }
  ThongTinSinhVien.init(
    {
      hoTen: { type: DataTypes.STRING(100), allowNull: false },
      maSinhVien: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      idChuyenNganh: {
        type: DataTypes.INTEGER,
        references: {
          model: "ChuyenNganhs",
          key: "id",
        },
      },
      idNguoiDung: {
        type: DataTypes.INTEGER,
        references: {
          model: "NguoiDungs",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      soDienThoai: { type: DataTypes.STRING(15) },
    },
    {
      sequelize,
      modelName: "ThongTinSinhVien",
      freezeTableName: true,
    }
  );
  return ThongTinSinhVien;
};
