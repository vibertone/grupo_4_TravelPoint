module.exports = (sequelize, dataTypes) => {
    let alias = 'Itineraries';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        price: {
            type: dataTypes.NUMBER,
            allowNull: false
        },
        origin_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        destiny_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'itineraries',
        timestamps: false
    }
    const Itinerary = sequelize.define(alias,cols,config);

    Itinerary.associate = function(models) {
        Itinerary.hasMany(models.Flights, {
            as: "flights",
            foreignKey: "itinerary_id"
        });

        Itinerary.belongsTo(models.Origins, {
            as: "origins",
            foreignKey: "origin_id"
        });

        Itinerary.belongsTo(models.Destinations, {
            as: "destinations",
            foreignKey: "destiny_id"
        });

        Itinerary.belongsToMany(models.Users, {
            as: "users",
            through: "user_itinerary",
            foreignKey: "itinerary_id",
            otherKey: "user_id",
            timestamps: false
        });
    };

    return Itinerary;
};