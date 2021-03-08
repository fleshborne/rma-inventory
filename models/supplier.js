    // supplierId = primary key
    // supplierName 
    // 
    module.exports = (sequelize, DataTypes) => {

 const Supplier = sequelize.define('Supplier', {
     name: {
         type: DataTypes.STRING
     },

 })
 Supplier.associate = (models) => {
     Supplier.hasMany(models.Part, {
         onDelete: 'cascade',
     })
 }
 return Supplier
}