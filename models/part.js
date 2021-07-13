
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
        partNumber : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        serialNumber : {
            type:DataTypes.STRING,
            allowNull: false,
        },
        
    })
    Part.associate = (models) => {
        Part.belongsTo(models.Supplier, {
            foreignKey: {
                allowNull: false,
            }
        });
       
    }
    return Part;
}