
module.exports = (sequelize, DataTypes) => {
 const serialNumber = sequelize.define('serialNumber', {
  itemType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serialNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
 })
//  serialNumber.associate = (models) => {
//    serialNumber.belongsToMany(models.Part, {
//      foreignKey : {
//        allowNull: false,
//      },
//      through: 'caseDetail',
//    })
//  }
  // serialId not as primary key
  // primary key = auto incrementing id
  // part id in association to part table
  // serialNumber
  // caseId

  return serialNumber;
};