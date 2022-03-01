module.exports = (sequelize, dataTypes) => {
    let alias = 'Flights';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        date: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        time: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        flight_number: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        duration: {
            type: dataTypes.TIME,
            allowNull: false
        },
        price: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        airline_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'flights',
        timestamps: false,
        underscore: true
    }
    const Flight = sequelize.define(alias,cols,config);

    Flight.associate = function(models) {
        Flight.belongsTo(models.Airlines, {
            as: "airlines",
            foreignKey: "airline_id"
        });
        
        Flight.hasMany(models.Itineraries, {
            as: "itineraries",
            foreignKey: "flight_id"
        });
    };

    return Flight;
};