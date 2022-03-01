module.exports = (sequelize, dataTypes) => {
    let alias = 'Itineraries';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        origin_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        destiny_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        flight_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'itineraries',
        timestamps: false,
        underscore: true
    }
    const Itinerary = sequelize.define(alias,cols,config);

    Itinerary.associate = function(models) {
        Itinerary.belongsTo(models.Flights, {
            as: "flights",
            foreignKey: "flight_id"
        });

        Itinerary.belongsTo(models.Origins, {
            as: "origins",
            foreignKey: "origin_id"
        });

        Itinerary.belongsTo(models.Destinations, {
            as: "destinations",
            foreignKey: "destiny_id"
        });

       /*  Itinerary.belongsToMany(models.Users, {
            as: "users",
            through: "user_itinerary",
            foreignKey: "itinerary_id",
            otherKey: "user_id",
            timestamps: false
        }); */
    };

    return Itinerary;
};