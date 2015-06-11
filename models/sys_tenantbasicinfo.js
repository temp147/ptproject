/**
 * Created by root on 6/10/15.
 */
/*
create table sys_租户信息
(
    TenantCode           varchar(8),
    TenantDBID           int,
    CustCode             int,
    DomainName           varchar(64),
    TenantContent        varchar(256),
    AdminName            varchar(32),
    AdminMailAdd         varchar(64),
    TenantType           varchar(16),
    Stauts               varchar(16),
    CreateTime           datetime,
    Creator              varchar(40),
    ModifyTime           datetime,
    Modifier             varchar(40),
    primary key ()
);
*/


module.exports = function(sequelize,DataTypes){
    var sys_tenantbasicinfo = sequelize.define('sys_tenantbasicinfo',{
        tenantcode:      {
            type:DataTypes.STRING(8),
            primaryKey:true
        },
        tenantdbid: {type:DataTypes.INTEGER,allowNull: false},
//        custcode:  {type:DataTypes.STRING(8),allowNull: false},
        domainname:    {type:DataTypes.STRING(64)},
        tenantcontent:  {type:DataTypes.STRING(256)},
        adminname:   {type:DataTypes.STRING(64),allowNull: false},
        adminmailadd:     {type:DataTypes.STRING(64),allowNull: false},
        tenanttype: {type:DataTypes.STRING(16)},
        creator:    {type:DataTypes.STRING(40)},
        modifier:   {type:DataTypes.STRING(40)}
    }, {
        timestamps: true,
        paranoid:true,
        freezeTableName:true,
        tableName:'sys_tenantbasicinfo'
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
                sys_tenantbasicinfo.hasMany(models.om_versioninfo);
            }
        }
    });
    return sys_tenantbasicinfo;
};