module.exports = function (sequelize, DataTypes) {

    var Burgers = sequelize.define("burgers", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },
        is_eaten: {
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
            defaultValue: false
        }
    }, {
            timestamps: false
        });

    return Burgers;
};