/**
 * Created by root on 5/30/15.
 */

module.exports = function(sequelize, DataTypes) {
    var sys_personbasicinfo = sequelize.define('sys_personbasicinfo',{
        personid:   {type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
        firstName:  {type:DataTypes.STRING(24)},
        lastname:   {type:DataTypes.STRING(24)},
        pername:    {
            type:DataTypes.STRING(64),
            set : function(val){
                this.setDataValue('pername',val.firstName+' '+val.lastname);
            }
        },
        phonenum:   {
            type:DataTypes.STRING(64),
            validate:{
                isNumeric: {
        msg: "must be the phone number with an format like 13512345678"
    }
            }
        },
        creator:    {type:DataTypes.STRING(40)},
        modifier:   {type:DataTypes.STRING(40)}
    }, {
        timestamps: true,
        // don't delete database entries but set the newly added attribute deletedAt
        // to the current date (when deletion was done). paranoid will only work if
        // timestamps are enabled
        paranoid:true,
        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName:true,
        tableName:'sys_personbasicinfo'
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
                sys_personbasicinfo.hasOne(models.sys_mobiledeviceinfo);
                sys_personbasicinfo.hasMany(models.sys_personcontactinfo);
                sys_personbasicinfo.hasMany(models.pa_custemployee);
            }
        }
    });
    return sys_personbasicinfo;
};