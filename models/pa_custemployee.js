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
        startdate:  {type:DataTypes.DATE,defaultValue:DataTypes.NOW},
        enddate:    {type:DataTypes.DATE,defaultValue:'2099-12-31'},
        tenantcode: {type:DataTypes.STRING(8)},
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
            primaryKey:true
//            ,
//           references:{
//                model:'sys_personbasicinfo',
//                key: 'personid'
//            }
        },
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
                pa_custemployee.belongsTo(models.sys_personbasicinfo,{foreignKey:'fk_personid}'});
                pa_custemployee.hasMany(models.om_empassignment);
                pa_custemployee.hasMany(models.pa_custemplink)
            }
        }
    });
    return pa_custemployee;
};