module.exports = (sequelize, dataTypes) => {
    let alias = 'Trip';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        fk_flights_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fk_aerport_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        fk_type_of_flight: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'trips',
        timestamps: false
    }
    const Trip = sequelize.define(alias,cols,config);

    return Trip;
};