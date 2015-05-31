/**
 * Created by root on 5/30/15.
 */
module.exports = function(sequelize,DataTypes){
    var om_empassignment = sequelize.define('om_empassignment',{
        empassignmentid:      {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        tenantcode: {type:DataTypes.STRING(8)},
        startdate:  {type:DataTypes.DATE,defaultValue:DataTypes.NOW},
        enddate:    {type:DataTypes.DATE,defaultValue:'2099-12-31'},
        empid:  {
            type:DataTypes.INTEGER,
            references:{
                model:'pa_custemployee',
                key:'empid'
            }
        },
        orgunitid:  {type:DataTypes.INTEGER},
        bizunitid:  {type:DataTypes.INTEGER
        },
        ismainassgn:   {type:DataTypes.STRING(0)},
        isorgManager:  {type:DataTypes.STRING(0)},
        assignindex:   {type:DataTypes.INTEGER},
        isexpatriate:  {type:DataTypes.STRING(0)},
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
                om_empassignment.belongsTo(models.pa_custemployee)
            }
        }
    });
    return om_empassignment;
};