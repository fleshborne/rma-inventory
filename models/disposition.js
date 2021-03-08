    // dispositionId
    // disposition(action after rma)
    // recorded(what we're going to do afterwards)

module.exports = (sequelize, DataTypes) => {


    const Disposition = sequelize.define('Disposition', {
        actionTaken: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,

        },
        // additional attributes to populate dropdown?
        // or one broad topic column?

    })
    Disposition.associate = (models) => {
        Disposition.hasOne(models.Case_Detail, {
            foreignKey: {
                key: "DispositionId",
                allowNull: false
            }
        })
    }

    
    return Disposition;
}