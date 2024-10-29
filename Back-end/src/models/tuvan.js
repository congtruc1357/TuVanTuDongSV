"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TuVan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TuVan.hasMany(models.GoiY, {
        foreignKey: "goiYId",
      });
      TuVan.hasMany(models.LichSuTuVan, {
        foreignKey: "tuVanId",
      });
    }
  }
  TuVan.init(
    {
      noiDungTuVan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      idGoiY: {
        type: DataTypes.INTEGER,
        references: {
          model: "GoiYs",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "TuVan",
      tableName: "tuvans",
      freezeTableName: true,
    }
  );
  return TuVan;
};
