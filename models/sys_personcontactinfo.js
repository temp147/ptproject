/**
 * Created by root on 5/30/15.
 */

module.exports = function(sequelize,DataTypes){
    var sys_personcontactinfo = sequelize.define('sys_personcontactinfo',{
        personid:   {
            type:DataTypes.INTEGER,
            primaryKey:true
//            ,
//            references:{
//                model:'sys_personbasicinfo',
//                key: 'personid'
//                }
        },
        qqnumber: {type:DataTypes.INTEGER, validate:{
            isNumeric:{
                msg: "must be number"
            }
            }},
        emailaddress:{type:DataTypes.STRING(64),validate:{
            //check for email format
            isEmail:true
            }},
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
                sys_personcontactinfo.belongsTo(models.sys_personbasicinfo,{foreinKey:'fk_personid'})
            }
        }
    });
    return sys_personcontactinfo;
};