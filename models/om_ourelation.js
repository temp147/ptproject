/**
 * Created by root on 6/10/15.
 */

module.exports = function(sequelize,DataTypes){
    var om_ourelation = sequelize.define('om_ourelation',{
        orgrelationid:      {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        startdate:  {type:DataTypes.DATE,defaultValue:DataTypes.NOW,allowNull: false},
        enddate:    {type:DataTypes.DATE,defaultValue:'2099-12-31',allowNull: false},
        tenantcode: {type:DataTypes.STRING(8)},
        orgstrplanid:  {type:DataTypes.STRING(64)},
        fromouid:   {type:DataTypes.INTEGER},
        toouid:     {type:DataTypes.STRING(64)},
        relationid: {type:DataTypes.STRING(64)},
        creator:    {type:DataTypes.STRING(40)},
        modifier:   {type:DataTypes.STRING(40)}
    }, {
        timestamps: true,
        paranoid:true,
        freezeTableName:true,
        tableName:'om_ourelation'
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
                om_ourelation.belongsTo(models.om_orgunit);
            }
        }
    });
    return om_ourelation;
};