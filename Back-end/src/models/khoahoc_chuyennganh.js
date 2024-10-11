"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KhoaHoc_ChuyenNganh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KhoaHoc_ChuyenNganh.init(
    {
      idKhoaHoc: {
        type: DataTypes.INTEGER,
        references: {
          model: "KhoaHoc",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCASE",
      },
      idChuyenNganh: {
        type: DataTypes.INTEGER,
        references: {
          model: "ChuyenNganh",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCASE",
      },
    },
    {
      sequelize,
      modelName: "KhoaHoc_ChuyenNganh",
      freezeTableName: true,
    }
  );
  return KhoaHoc_ChuyenNganh;
};
