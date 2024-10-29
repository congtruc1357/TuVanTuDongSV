"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Diem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Diem.belongsTo(models.ThongTinSinhVien, {
        foreignKey: "thongTinSinhVienId",
      });
      Diem.belongsTo(models.MonHoc, {
        foreignKey: "monHocId",
      });
    }
  }
  Diem.init(
    {
      diemSo: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
      sequelize,
      modelName: "Diem",
      tableName: "diems",
      freezeTableName: true,
    }
  );
  return Diem;
};
