module.exports = (sequelize, dataTypes) => {
    let alias = 'Airports';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        code: {
            type: dataTypes.STRING(5),
            allowNull:false
        },
        airport: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        country_code: {
            type: dataTypes.STRING(5),
            allowNull: false
        }
    };
    let config = {
        tableName: 'airports',
        timestamps: false,
        underscore: true
    }
    const Airport = sequelize.define(alias, cols, config);

    Airport.associate = function (models) {
        Airport.hasMany(models.Origins, {
            as: "origins",
            foreignKey: "airport_id"
        });

        Airport.hasMany(models.Destinations, {
            as: "destinations",
            foreignKey: "airport_id"
        });
    };

    return Airport;
};