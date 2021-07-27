
module.exports = (sequelize, DataTypes) => {
 const caseDetail = sequelize.define('caseDetail', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
  caseName: {
    type: DataTypes.STRING,
    allowNull: false,
  }

  })

 caseDetail.associate = (models) => {
  caseDetail.belongsTo(models.User, {
    foreignKey: 'UserId'
})


caseDetail.belongsTo(models.Contact, {
  onDelete: 'cascade',
  foreignKey: {
    allowNull: false,
  }
})

caseDetail.belongsTo(models.Site, {
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