module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        country: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image: dataTypes.BLOB('long'),
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    return User;
};