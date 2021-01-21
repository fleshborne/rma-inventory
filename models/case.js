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
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE,
        }, 
  
    })
    Case.associate = (models) => {
        Case.belongsToMany(models.User, {
            through: 'Case_Detail',
        })
    //     Case.belongsToMany(models.User, {
    //         foreignKey: {
    //             allowNull: false,
    //         },
    //         through: 'caseDetail',
    //     });
        Case.belongsToMany(models.Site, {
            foreignKey: {
                allowNull: false
            },
            through: 'Case_Detail',
        })
        Case.belongsToMany(models.Contact, {
            foreignKey: {
                allowNull: false,
        },
            through: 'Case_Detail',
        })
    }
    return Case;
}