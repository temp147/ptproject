/**
 * Created by root on 6/10/15.
 */
/*
create table om_组织版本
(
    OrgStructurePlanID   int not null,
    TenantCode           varchar(8),
    CustID               varchar(8),
    PlanVersion          varchar(8),
    StructurePlanName    varchar(64),
    Description          varchar(128),
    Status               varchar(8),
    StatusChangeDate     date,
    CreateTime           datetime,
    Creator              varchar(40),
    ModifyTime           datetime,
    Modifier             varchar(40),
    primary key (OrgStructurePlanID)
);

alter table om_组织版本 add constraint FK_Reference_1 foreign key ()
references sys_租户信息 on delete restrict on update restrict;
*/
module.exports = function(sequelize,DataTypes){
    var om_versioninfo = sequelize.define('om_versioninfo',{
        orgstrplanid:      {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        startdate:  {type:DataTypes.DATE,defaultValue:DataTypes.NOW,allowNull: false},
        enddate:    {type:DataTypes.DATE,defaultValue:'2099-12-31',allowNull: false},
        tenantcode: {type:DataTypes.STRING(8),allowNull: false},
        planversion:{type:DataTypes.STRING(8),allowNull: false},
        strplanname:{type:DataTypes.STRING(64),allowNull: false},
        description:{type:DataTypes.STRING(128)},
        status: {type:DataTypes.STRING(8),defaultValue:'draft',allowNull: false},
        statuschangedate: {type:DataTypes.DATE},
        creator:    {type:DataTypes.STRING(40)},
        modifier:   {type:DataTypes.STRING(40)}
    }, {
        timestamps: true,
        paranoid:true,
        freezeTableName:true,
        tableName:'om_versioninfo'
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
                om_versioninfo.hasMany(models.om_ouversionrealtion);
                om_versioninfo.belongsTo(models.sys_tenantbasicinfo);
            }
        }
    });
    return om_versioninfo;
};