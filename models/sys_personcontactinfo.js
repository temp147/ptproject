/**
 * Created by root on 5/30/15.
 */
module.exports = function(sequelize,DataTypes){
    var sys_personcontactinfo = sequelize.define('sys_personcontactinfo',{
        personid:   {
            type:DataTypes.INTEGER,
            primaryKey:true,
            references:{
                model:'sys_personbasicinfo',
                key: 'personid'
            }},
        qqnumber: {type:DataTypes.INTEGER, validate:{
            isIn:{
                args:[['andorid','ios','winphone']],
                msg: "must be in andorid,ios, winphone"
            }
        }},
        softversion:{type:DataTypes.STRING(64)},
        creator:    {type:DataTypes.STRING(40)},
        modifier:   {type:DataTypes.STRING(40)}
    }, {
        timestamps: true,
        paranoid:true,
        freezeTableName:true,
        tableName:'sys_personcontactinfo'
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
                sys_mobiledeviceinfo.belongsTo(models.sys_personbasicinfo)
            }
        }
    });
    return sys_mobiledeviceinfo;
};