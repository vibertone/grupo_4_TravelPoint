module.exports = (sequelize, dataTypes) => {
    let alias = 'Origins';
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
        tableName: 'origins',
        timestamps: false,
        underscore: true
    }
    const Origin = sequelize.define(alias,cols,config);

    Origin.associate = function (models) {
        Origin.belongsTo(models.Airports, {
            as: "airports",
            foreignKey: "airport_id"
        });

        Origin.belongsTo(models.Cities, {
            as: "cities",
            foreignKey: "city_id"
        });

        Origin.belongsTo(models.Countries, {
            as: "countries",
            foreignKey: "country_id"
        });

        Origin.hasMany(models.Itineraries, {
            as: "itineraries",
            foreignKey: "origin_id"
        });
    };

    return Origin;
};