
    // primarykey = partnumber 
    // part description 
    // supplierId optional
    // price optional
module.exports = (sequelize,DataTypes) => {

    const Part = sequelize.define('Part', {
    
        partType : {
            type: DataTypes.STRING,
            allowNull:false,
        },
        serialNumber : {
            type:DataTypes.STRING,
            allowNull: false,
        },
        
    })
    Part.associate = (models) => {
        // Part.belongsToMany(models.Case, {
        //     through: 'Case_Detail'
        // })
    //     Part.belongsTo(models.Case, {
    //         foreignKey: {
    //             allowNull:false
    //         }
    //     })
    //     Part.hasMany(models.serialNumber, {
    //         onDelete: 'cascade',
    //     })
        Part.belongsTo(models.Supplier, {
            foreignKey: 'SupplierId'
        }),
        Part.hasMany(models.caseDetail, {
            foreignKey: {
                allowNull: false,
                key: 'Part_NumberId'
            }
        })
    }
    return Part;
}