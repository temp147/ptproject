/**
 * Created by root on 6/10/15.
 */
/*
create table om_组织版本组织单元关系
(
    OrgStrPlanID   int not null,
    TenantCode           varchar(8),
    OrgUnitID            int not null,
    CreateTime           datetime,
    Creator              varchar(40),
    ModifyTime           datetime,
    Modifier             varchar(40),
    StartDate            date,
    EndDate              date
);*/
module.exports = function(sequelize,DataTypes){
    var om_ouversionrelation = sequelize.define('om_ouversionrelation',{
        orgstrplanid:      {
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        orgunitid:  {
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        startdate:  {type:DataTypes.DATE,defaultValue:DataTypes.NOW,allowNull: false},
        enddate:    {type:DataTypes.DATE,defaultValue:'2099-12-31',allowNull: false},
        tenantcode: {type:DataTypes.STRING(8),allowNull: false},
        creator:    {type:DataTypes.STRING(40)},
        modifier:   {type:DataTypes.STRING(40)}
    }, {
        timestamps: true,
        paranoid:true,
        freezeTableName:true,
        tableName:'om_ouversionrelation'
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
                om_ouversionrelation.belongsTo(models.om_orgunit);
                om_ouversionrelation.belongsTo(models.om_versioninfo);
            }
        }
    });
    return om_ouversionrelation;
};