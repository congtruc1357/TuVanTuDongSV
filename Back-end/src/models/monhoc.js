"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MonHoc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MonHoc.hasMany(models.Diem, {
        foreignKey: "monHocId",
      });
    }
  }
  MonHoc.init(
    {
      tenMonHoc: { type: DataTypes.STRING, allowNull: false },
      soTinChi: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "MonHoc",
      tableName: "monhocs",
      freezeTableName: true,
    }
  );
  return MonHoc;
};
