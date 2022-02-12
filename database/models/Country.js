module.exports = (sequelize, dataTypes) => {
    let alias = 'Countries';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        country: {
            type: dataTypes.STRING(200),
            allowNull: false
        }
    };
    let config = {
        tableName: 'countries',
        timestamps: false,
        underscore: true
    }
    const Country = sequelize.define(alias, cols, config);

    Country.associate = function (models) {
        Country.hasMany(models.Users, {
            as: "users",
            foreignKey: "country_id"
        });

        /* Country.hasMany(models.Origins, {
            as: "origins",
            foreignKey: "country_id"
        });

        Country.hasMany(models.Destinations, {
            as: "destinations",
            foreignKey: "country_id"
        }); */
    };

    return Country;
};