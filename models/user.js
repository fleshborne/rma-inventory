// const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      // The email cannot be null, and must be a proper email before creation
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      // The password cannot be null
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    // User.prototype.validPassword = function (password) {
    //     return bcrypt.compareSync(password, this.password);
    //   };
    //   // Hooks are automatic methods that run during constious phases of the User Model lifecycle
    //   // In this case, before a User is created, we will automatically hash their password
    //   User.addHook('beforeCreate', (user) => {
    //     user.password = bcrypt.hashSync(
    //       user.password,
    //       bcrypt.genSaltSync(10),
    //       null
    //     );
    //     }),
    User.associate = (models) => {
        User.hasMany(models.Case, {
        foreignKey: {
            allowNull: false,
        },
        });
    }
    return User;
}