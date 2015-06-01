/**
 * Created by root on 6/1/15.
 */
/**
 * Created by root on 5/30/15.
 */

module.exports = function(sequelize,DataTypes){
    var sys_mobiledeviceinfo = sequelize.define('sys_mobiledeviceinfo',{
        devicecode: {type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
        personid:   {
            type:DataTypes.INTEGER,
//            references:{
//               model:'sys_personbasicinfo',
//                key: 'personid'
//           }
        },
        devicetype: {type:DataTypes.STRING(64), validate:{
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
        tableName:'sys_mobiledeviceinfo'
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
                sys_mobiledeviceinfo.belongsTo(models.sys_personbasicinfo,{foreignKey:'fk_personid'})
            }
        }
    });
    return sys_mobiledeviceinfo;
};