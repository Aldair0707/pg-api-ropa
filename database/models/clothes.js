'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clothes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Clothes.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    color: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clothes',
  });
  return Clothes;
};