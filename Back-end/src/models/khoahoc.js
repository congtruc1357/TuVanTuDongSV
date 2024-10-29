"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KhoaHoc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      KhoaHoc.belongsToMany(models.ChuyenNganh, {
        through: "KhoaHoc_ChuyenNganh",
        foreignKey: "khoaHocId",
      });
    }
  }
  KhoaHoc.init(
    {
      tenKhoaHoc: { type: DataTypes.STRING(100), allowNull: false },
      moTa: { type: DataTypes.TEXT },
    },
    {
      sequelize,
      modelName: "KhoaHoc",
      tableName: "khoahocs",
      freezeTableName: true,
    }
  );
  return KhoaHoc;
};
