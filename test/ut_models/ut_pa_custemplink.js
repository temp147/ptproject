/**
 * Created by root on 6/3/15.
 */

var expect = require('expect.js');
var models = require('../../models/index');
var currenttime = new Date();

//test the basic function of pa_custemployee
describe('pa_custemplink', function () {
    var empid;
    var tenantcode;
    before(function(done){
        var employee = models.pa_custemployee;
        employee.findOne({
            where:{
                firstname:'John'
            },
            order:[
                ['empid','DESC']
            ]
        })
            .then(function(result){
//                console.log(result.dataValues.personid);
                empid=result.dataValues.empid;
                tenantcode = result.dataValues.tenantcode;
                done();
            });
    });


    it('pa_custemplink add' ,function(done){
        var employeelink = models.pa_custemplink
            .build({
                tenantcode:tenantcode,
                empid:empid,
                entrylinkage:'links',
                linkagetype:'1',
                creator:'mocha',
                modifier:'mocha'
            });
        employeelink
            .save()
            .then(function(){
//                console.log('add userinfo sucessfully');
                done();
            })
            .catch(function(err){
//                console.log(err);
                expect(err).to.equal(null);
                done();
            });
    });

    after(function(done){
        done();
    })
});
