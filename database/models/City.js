module.exports = (sequelize, dataTypes) => {
    let alias = 'Cities';
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
        }
    };
    let config = {
        tableName: 'cities',
        timestamps: false
    }
    const City = sequelize.define(alias,cols,config);

    City.associate = function(models) {
        City.hasMany(models.Origins, {
            as: "origins",
            foreignKey: "city_id"
        });

        City.hasMany(models.Destinations, {
            as: "destinations",
            foreignKey: "city_id"
        });
    };

    return City;
};