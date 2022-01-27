module.exports = (sequelize, dataTypes) => {
    let alias = 'Flight';
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
        duration: {
            type: dataTypes.NUMBER,
            allowNull: false
        },
        price: {
            type: dataTypes.NUMBER,
            allowNull: false
        },
        fk_user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_type_of_flight: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'flights',
        timestamps: false
    }
    const Flight = sequelize.define(alias,cols,config);

    return Flight;
};