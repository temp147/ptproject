/**
 * Created by root on 6/3/15.
 */
var expect = require('expect.js');
var models = require('../../models/index');
var currenttime = new Date();

//test the basic function of sys_personbasicinfo
describe('sys_mobiledeviceinfo', function () {
    var personid;
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
                console.log(result.dataValues.personid);
                personid=result.dataValues.personid;
                done();
            });
    });


    it('sys_mobiledeviceinfo add with wrong device' ,function(done){
        var sys_usermobile = models.sys_mobiledeviceinfo
            .build({
                personid:personid,
                devicetype:'Smith',
                softversion:'1.0.0.0',
                creator:'mocha',
                modifier:'mocha'
            });
        sys_usermobile
            .save()
            .then(function(){
//                console.log('add userinfo sucessfully');
                done();
            })
            .catch(function(err){
//                console.log(err);
                expect(err.toString()).to.equal('SequelizeValidationError: Validation error: must be in andorid, ios, winphone');
                done();
            });
    });

    it('sys_mobiledeviceinfo add' ,function(done){
        var sys_usermobile = models.sys_mobiledeviceinfo
            .build({
                personid:personid,
                devicetype:'ios',
                softversion:'1.0.0.0',
                creator:'mocha',
                modifier:'mocha'
            });
        sys_usermobile
            .save()
            .then(function(){
//                console.log('add userinfo sucessfully');
                done();
            })
            .catch(function(err){
//                console.log(err.toString());
                expect(err).to.equal(null);
                done();
            });
    });

    after(function(done){
        done();
    })
});
