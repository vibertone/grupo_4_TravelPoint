module.exports = (sequelize, dataTypes) => {
    let alias = 'User_Itinerary';
    let cols = {
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        itinerary_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'user_itinerary',
        timestamps: false
    }
    const User_Itinerary = sequelize.define(alias,cols,config);

    return User_Itinerary;
};