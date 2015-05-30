/**
 * Created by root on 5/30/15.
 */

module.exports = function(sequelize,DataTypes){
    var pa_custemployee = sequelize.define('pa_custemployee',{
        empid:      {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        tenantCode: {type:DataTypes.STRING(8)},
        startdate:  {type:DataTypes.DATE},
        enddate:    {type:DataTypes.DATE},
        firstName:  {type:DataTypes.STRING(24)},
        lastname:   {type:DataTypes.STRING(24)},
        pername:    {
            type:DataTypes.STRING(64),
            set : function(val){
                this.setDataValue('pername',val.firstName+' '+val.lastname);
            }
        },
        personid:   {
            type:DataTypes.INTEGER,
            primaryKey:true,
            references:{
                model:'sys_personbasicinfo',
                key: 'personid'
            }},
        creator:    {type:DataTypes.STRING(40)},
        modifier:   {type:DataTypes.STRING(40)}
    }, {
        timestamps: true,
        paranoid:true,
        freezeTableName:true,
        tableName:'pa_custemployee'
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
                pa_custemployee.belongsTo(models.sys_personbasicinfo)
            }
        }
    });
    return pa_custemployee;
};