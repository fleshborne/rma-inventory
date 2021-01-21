
    // primarykey = partnumber 
    // part description 
    // supplierId optional
    // price optional
module.exports = (sequelize,DataTypes) => {

    const Part = sequelize.define('Part', {
        partType : {
            type: DataTypes.STRING,
            allowNull:false,
        }
    })
    // Part.associate = (models) => {
    //     Part.belongsTo(models.Case, {
    //         foreignKey: {
    //             allowNull:false
    //         }
    //     })
    //     Part.hasMany(models.serialNumber, {
    //         onDelete: 'cascade',
    //     })
    //     Part.belongsTo(models.Supplier, {
    //         onDelete: 'cascade',
    //     })
    // }
    return Part;
}