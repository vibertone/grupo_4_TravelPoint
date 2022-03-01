module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
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
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        country_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        category: {
            type: dataTypes.STRING(10),
            allowNull: false
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false,
        underscore: true
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.Countries, {
            as: "countries",
            foreignKey: "country_id"
        });

        /*  User.belongsToMany(models.Itineraries, {
             as: "itineraries",
             through: "user_itinerary",
             foreignKey: "user_id",
             otherKey: "itinerary_id",
             timestamps: false
         }); */
    };

    return User;
};