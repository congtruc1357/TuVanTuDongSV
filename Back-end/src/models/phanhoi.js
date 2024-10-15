"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PhanHoi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PhanHoi.belongsTo(models.NguoiDung, { foreignKey: "nguoiDungId" });
    }
  }
  PhanHoi.init(
    {
      noiDung: { type: DataTypes.TEXT },
      diemDanhGia: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
      },
      nguoiDungId: {
        type: DataTypes.INTEGER,
        references: {
          model: "NguoiDung",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "PhanHoi",
      tableName: "phanhois",
      freezeTableName: true,
    }
  );
  return PhanHoi;
};
