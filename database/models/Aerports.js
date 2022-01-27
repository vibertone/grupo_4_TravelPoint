module.exports = (sequelize, dataTypes) => {
    let alias = 'Aerport';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        fk_city_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'aerports',
        timestamps: false
    }
    const Aerport = sequelize.define(alias,cols,config);

    return Aerport;
};