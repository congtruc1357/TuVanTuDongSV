"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DiemTrungBinh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DiemTrungBinh.belongsTo(models.ThongTinSinhVien, {
        foreignKey: "thongTinSinhVienId",
      });
    }
  }
  DiemTrungBinh.init(
    {
      thongTinSinhVienId: { type: DataTypes.INTEGER },
      diemTrungBinh: { type: DataTypes.FLOAT },
    },
    {
      sequelize,
      modelName: "DiemTrungBinh",
      tableName: "diemtrungbinhs",
      freezeTableName: true,
    }
  );
  return DiemTrungBinh;
};
