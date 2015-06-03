/**
 * Created by root on 6/3/15.
 */

var expect = require('expect.js');
var models = require('../../models/index');
var currenttime = new Date();

//test the basic function of pa_custemployee
describe('pa_custemployee', function () {
    var personid;
    var firstname;
    var lastname;
    before(function(done){
        var sys_user = models.sys_personbasicinfo;
        sys_user.findOne({
            where:{
                firstname:'John'
            },
            order:[
                ['personid','DESC']
            ]
        })
            .then(function(result){
//                console.log(result.dataValues.personid);
                personid=result.dataValues.personid;
                firstname=result.dataValues.firstname;
                lastname=result.dataValues.lastname;
                done();
            });
    });


    it('pa_custemployee add' ,function(done){
        var employee = models.pa_custemployee
            .build({
                tenantcode:'Test001',
                firstname:firstname,
                lastname:lastname,
                pername:'',
                personid:'mocha',
                creator:'mocha',
                modifier:'mocha'
            });
        employee
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
