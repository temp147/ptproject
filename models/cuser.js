/**
 * Created by root on 5/20/15.
 */
module.exports = function(sequelize, DataTypes){
    return sequelize.define('Brand', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false },
        description: {
            type: DataTypes.TEXT,
            allowNull: false },
        status: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: true }
    })
};