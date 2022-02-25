module.exports = (sequelize, dataTypes) => {
    let alias = 'Airlines';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        airline: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        country: {
            type: dataTypes.STRING(200),
            allowNull: false
        }
    };
    let config = {
        tableName: 'airlines',
        timestamps: false
    }
    const Airline = sequelize.define(alias,cols,config);

    Airline.associate = function(models) {
        Airline.hasMany(models.Flights, {
            as: "flights",
            foreignKey: "airline_id"
        })
    };

    return Airline;
};