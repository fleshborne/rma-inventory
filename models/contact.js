    // contactId = primarykey
    // supplierId = from supplierTable
    // shipmentAddress(break into seperate inputs)
    // 
    module.exports = (sequelize, DataTypes) => {

    const Contact = sequelize.define('Contact', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });
    // Contact.associate = (models) => {
    //     Contact.belongsTo(models.Case, {
    //         foreignKey: {
    //             allowNull:false,
    //         }
    //     })
    // }
    return Contact
}