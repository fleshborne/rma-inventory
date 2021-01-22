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
    Site.associate = (models) => {
        Site.belongsToMany(models.Case, {
       through: 'Case_Detail'
        })
    }
    return Site;
}