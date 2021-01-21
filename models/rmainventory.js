'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class inventoryItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  inventoryItem.init({
    projectName: DataTypes.STRING,
    internalContact: DataTypes.STRING,
    trackingId: DataTypes.STRING,
    carrier: DataTypes.STRING,
    itemValue: DataTypes.INTEGER,
    dateReceived: DataTypes.INTEGER,
    dateTested: DataTypes.INTEGER,
    manufactureDate: DataTypes.INTEGER,
    dateSentManufacture: DataTypes.INTEGER,
    serialNumber: DataTypes.STRING,
    reasonForReturn: DataTypes.STRING,
    returnToProd: DataTypes.BOOLEAN,
    returnToStock: DataTypes.BOOLEAN,
    returnToManufacture: DataTypes.BOOLEAN,
    repairInHouse: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'inventoryItem',
  });
  return inventoryItem;
};