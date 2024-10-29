"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GoiY extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GoiY.belongsTo(models.TuVan, {
        foreignKey: "goiYId",
      });
    }
  }
  GoiY.init(
    {
      noiDung: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: "GoiY",
      tableName: "goiys",
      freezeTableName: true,
    }
  );
  return GoiY;
};
