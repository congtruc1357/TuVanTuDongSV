"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TieuChuanHocTap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TieuChuanHocTap.belongsToMany(models.GoiY, {
        through: "TieuChuanGoiY",
        foreignKey: "tieuChuanId",
      });
      TieuChuanHocTap.belongsToMany(models.KhoaHoc, {
        through: "TieuChuanKhoaHoc",
        foreignKey: "tieuChuanId",
      });
      TieuChuanHocTap.belongsToMany(models.ThongTinSinhVien, {
        through: "TieuChuanSinhVien",
        foreignKey: "tieuChuanId",
      });
    }
  }
  TieuChuanHocTap.init(
    {
      thangDiemHe10: { type: DataTypes.FLOAT, allowNull: false },
      diemChu: { type: DataTypes.STRING, allowNull: false },
      xepLoai: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "TieuChuanHocTap",
      tableName: "tieuchuanhoctaps",
      freezeTableName: true,
    }
  );
  return TieuChuanHocTap;
};
