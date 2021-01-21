    // siteId needs to be added
module.exports = (sequelize, DataTypes) => {

    const Site = sequelize.define('Site', {
        siteName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        location: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
    })
    // Site.associate = (models) => {
    //     Site.belongsTo(models.Case, {
    //         foreignKey: {
    //             allowNull: false
    //         },
    //     })
    // }
    return Site;
}