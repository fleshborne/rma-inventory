 // add id
    // where is the fault from ie from field from support 
module.exports = (sequelize, DataTypes) => {
   
    const Fault = sequelize.define('Fault', {
        reasonForReturn: {
            type: DataTypes.STRING,
        }
    })

    Fault.associate = (models) => {
        Fault.hasMany(models.Case_Detail, {
            foreignKey: {
                key: 'faultId',
                allowNull: false, 
            },

        });

    };
    return Fault;
}