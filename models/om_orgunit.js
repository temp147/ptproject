/**
 * Created by root on 6/10/15.
 */

module.exports = function(sequelize,DataTypes){
    var om_orgunit = sequelize.define('om_orgunit',{
        orgunitid:      {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        bizunitid:  {type:DataTypes.STRING(64)},
        startdate:  {type:DataTypes.DATE,defaultValue:DataTypes.NOW,allowNull: false},
        enddate:    {type:DataTypes.DATE,defaultValue:'2099-12-31',allowNull: false},
        tenantcode: {type:DataTypes.STRING(8)},
        outypeid:   {type:DataTypes.INTEGER},
        orgunitname:{type:DataTypes.STRING(64)},
        orgunitsimname: {type:DataTypes.STRING(64)},
        costcenterid:   {type:DataTypes.INTEGER},
        description:    {type:DataTypes.INTEGER},
        creator:    {type:DataTypes.STRING(40)},
        modifier:   {type:DataTypes.STRING(40)}
    }, {
        timestamps: true,
        paranoid:true,
        freezeTableName:true,
        tableName:'om_orgunit'
    }, {
        indexes:[
            {}
        ]
    },{
        instanceMethods: {
            countTasks: function() {
                // how to implement this method ?
            }
        },
        classMethods:{
            classTasks: function(){
            },
            associate: function(models) {
                om_orgunit.hasMany(models.om_empassignment);
            }
        }
    });
    return om_orgunit;
};