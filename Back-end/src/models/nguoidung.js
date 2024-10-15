"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NguoiDung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NguoiDung.hasOne(models.ThongTinSinhVien, { foreignKey: "nguoiDungId" });
      NguoiDung.hasMany(models.LichSuTuVan, { foreignKey: "nguoiDungId" });
      NguoiDung.hasMany(models.PhanHoi, { foreignKey: "nguoiDungId" });
    }
  }
  NguoiDung.init(
    {
      tenNguoiDung: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
      matKhau: { type: DataTypes.STRING(255), allowNull: false },
      vaiTro: {
        type: DataTypes.ENUM("SinhVien", "QuanTriVien"),
        defaultValue: "SinhVien",
      },
    },
    {
      sequelize,
      modelName: "NguoiDung",
      tableName: "nguoidungs",
      hooks: {
        async afterCreate(nguoiDung, options) {
          if (nguoiDung.vaiTro === "SinhVien") {
            await sequelize.models.ThongTinSinhVien.create({
              hoTen: nguoiDung.tenNguoiDung,
              maSinhVien: 0,
              email: nguoiDung.email,
              idChuyenNganh: 1,
              idNguoiDung: nguoiDung.id,
            });
          }
        },
      },
      timestamps: true,
      freezeTableName: true,
    }
  );

  return NguoiDung;
};
