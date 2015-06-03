/**
 * Created by root on 5/30/15.
 * create table pa_custemplink
 */
module.exports = function(sequelize,DataTypes){
    var pa_custemplink = sequelize.define('pa_custemplink',{
        linkid:      {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        startdate:  {type:DataTypes.DATE,defaultValue:DataTypes.NOW},
        enddate:    {type:DataTypes.DATE,defaultValue:'2099-12-31'},
        tenantcode: {type:DataTypes.STRING(8)},
        empid:{
            type:DataTypes.INTEGER,
            allowNull: false,
            reference:{
                model:'pa_custemployee',
                key:'empid'
            }
        },
        entrylinkage:{type:DataTypes.STRING(128),allowNull:false},
        linkagetype:{type:DataTypes.STRING(8),allowNull:false},
        creator:    {type:DataTypes.STRING(40)},
        modifier:   {type:DataTypes.STRING(40)}
    }, {
        timestamps: true,
        paranoid:true,
        freezeTableName:true,
        tableName:'pa_custemplink'
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
                pa_custemplink.belongsTo(models.pa_custemployee);
            }
        }
    });
    return pa_custemplink;
};