/**
 * Created by root on 5/30/15.
 */
var pa_custemployee = require('../models').pa_custemployee;

module.exports = function(sequelize,DataTypes){
    var om_empassignment = sequelize.define('om_empassignment',{
        empassignmentid:      {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        tenantcode: {type:DataTypes.STRING(8),allowNull: false},
        startdate:  {type:DataTypes.DATE,defaultValue:DataTypes.NOW,allowNull: false},
        enddate:    {type:DataTypes.DATE,defaultValue:'2099-12-31',allowNull: false},
        empid:  {
            type:DataTypes.INTEGER,
            allowNull: false
//            ,
//            references:{
//                model:pa_custemployee,
//                key:'empid'
//            }
        },
        orgunitid:  {type:DataTypes.INTEGER,allowNull: false},
        bizunitid:  {type:DataTypes.INTEGER,allowNull: false},
        ismainassgn:   {type:DataTypes.STRING(1)},
        isorgManager:  {type:DataTypes.STRING(1)},
        assignindex:   {type:DataTypes.INTEGER},
        isexpatriate:  {type:DataTypes.STRING(1)},
        status:     {type:DataTypes.STRING(16)},
        creator:    {type:DataTypes.STRING(40)},
        modifier:   {type:DataTypes.STRING(40)}
    }, {
        timestamps: true,
        paranoid:true,
        freezeTableName:true,
        tableName:'om_empassignment'
    }, {//add indexes here
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
                om_empassignment.belongsTo(models.pa_custemployee,{foreignKey:'fk_empid'});
                om_empassignment.belongsTo(models.om_orgunit)
            }
        }
    });
    return om_empassignment;
};