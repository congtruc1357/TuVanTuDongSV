"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ChuyenNganh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ChuyenNganh.belongsToMany(models.KhoaHoc, {
        through: "KhoaHoc_ChuyenNganh",
        foreignKey: "idChuyenNganh",
      });
      ChuyenNganh.hasMany(models.ThongTinSinhVien, {
        foreignKey: "chuyenNganhId",
      });
    }
  }
  ChuyenNganh.init(
    {
      tenChuyenNganh: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Công nghệ thông tin",
      },
      moTa: { type: DataTypes.TEXT },
    },
    {
      sequelize,
      modelName: "ChuyenNganh",
      freezeTableName: true,
    }
  );
  return ChuyenNganh;
};
