module.exports = function(sequelize, DataTypes) {
    var Run = sequelize.define("Run", {
        length: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        time: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Run;
}