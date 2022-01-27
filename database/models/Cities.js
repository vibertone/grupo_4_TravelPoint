module.exports = (sequelize, dataTypes) => {
    let alias = 'City';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        description: {
            type: dataTypes.STRING(200),
            allowNull: false
        }
    };
    let config = {
        tableName: 'cities',
        timestamps: false
    }
    const City = sequelize.define(alias,cols,config);

    return City;
};