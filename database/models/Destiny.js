module.exports = (sequelize, dataTypes) => {
    let alias = 'Destinations';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        airport_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        city_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        country_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'destinations',
        timestamps: false,
        underscore: true
    }
    const Destiny = sequelize.define(alias,cols,config);

    Destiny.associate = function (models) {
        Destiny.belongsTo(models.Airports, {
            as: "airports",
            foreignKey: "airport_id"
        });

        Destiny.belongsTo(models.Cities, {
            as: "cities",
            foreignKey: "city_id"
        });

        Destiny.belongsTo(models.Countries, {
            as: "countries",
            foreignKey: "country_id"
        });

        Destiny.hasMany(models.Itineraries, {
            as: "itineraries",
            foreignKey: "destiny_id"
        });
    };

    return Destiny;
};