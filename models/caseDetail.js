
module.exports = (sequelize, DataTypes) => {
 const caseDetail = sequelize.define('caseDetail', {
  itemType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serialNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  }
 })
 caseDetail.associate = (models) => {

caseDetail.belongsTo(models.Case, {
  onDelete: 'cascade',
  foreignKey: {
    allowNull: false,
  }
})

caseDetail.belongsTo(models.Part, {
  onDelete: 'cascade',
  foreignKey : {
    allowNull: false,
  }
})
caseDetail.belongsTo(models.Fault, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: 'cascade',
})
caseDetail.belongsTo(models.Disposition, {
  foreignKey: {
    allowNull: false,
  },
  onDelete: 'cascade',
})
 }
  // serialId not as primary key
  // primary key = auto incrementing id
  // part id in association to part table
  // serialNumber
  // caseId

  return caseDetail;
};