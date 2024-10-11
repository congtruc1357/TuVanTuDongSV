"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LichSuTuVan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LichSuTuVan.belongsTo(models.TuVan, { foreignKey: "tuVanId" });
      LichSuTuVan.belongsTo(models.NguoiDung, { foreignKey: "nguoiDungId" });
    }
  }
  LichSuTuVan.init(
    {
      noiDungTuVan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      thoiGian: { type: DataTypes.DATE },
      nguoiDungId: {
        type: DataTypes.INTEGER,
        references: {
          model: "NguoiDung",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      idTuVan: {
        type: DataTypes.INTEGER,
        references: {
          model: "TuVan",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "LichSuTuVan",
      freezeTableName: true,
    }
  );
  return LichSuTuVan;
};
