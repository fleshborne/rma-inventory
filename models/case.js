    // todos
        // needs primary key? caseNumber
        // returnTrackingNumber
        // case ()
        // caseDetail, make its own table associate disposition, fault, part, serial
        // site id
        // contact id
        // 

module.exports = (sequelize, DataTypes) => {
    const Case = sequelize.define('Case', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        caseName: {
            type: DataTypes.STRING,
            allowNull: false,

        },          
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE,
        }, 
  
    })
    Case.associate = (models) => {
        Case.belongsTo(models.User, {
            foreignKey : {
                allowNull : false
            }
        })
        Case.belongsTo(models.Site, {
            foreignKey: {
                allowNull: false
            }
        })
        Case.belongsTo(models.Contact, {
            foreignKey: {
                allowNull : false
            }
        })
    }
    return Case;
}