/**
 * Created by root on 6/1/15.
 */
//todo add the full unit test function

var expect = require('expect.js');
var models = require('../models');

var currenttime = new Date();

//test the basic function of sys_personbasicinfo
describe('sys_personbasicinfo', function () {

    before(function(done){
    done();
    });

    it('sys_personbasicinfo add' ,function(done){
        var sys_user = models.sys_personbasicinfo
            .build({
            firstname:'John',
            lastname:'Smith',
            pername:'1111',
            phonenum:'13825354499',
            creator:'mocha',
            modifier:'mocha'
            });
        sys_user
            .save()
            .then(function(){
//                console.log('add userinfo sucessfully');
                done();
            })
            .catch(function(err){
                console.log(err);
                expect(err).to.equal(null);
                done();
            });
    });

    it('sys_personbasicinfo add with wrong phone number' ,function(done){
        var sys_user = models.sys_personbasicinfo
            .build({
                firstname:'John',
                lastname:'Smith',
                pername:'',
                phonenum:'qq13825354499',
                creator:'mocha',
                modifier:'mocha'
            });
        sys_user
            .save()
            .then(function(){
//                console.log('add userinfo sucessfully');
                done();
            })
            .catch(function(err){
//                console.log(err.toString());
                expect(err.toString()).to.equal('SequelizeValidationError: Validation error: must be the phone number with an format like 13512345678');
                done();
            });
    });

    it('sys_personbasicinfo get' ,function(done){
        var sys_user = models.sys_personbasicinfo;
        sys_user.findOne({
            where:{
                firstname:'John',
                createdAT:{
                $gte:currenttime
                }
            }
        })
            .then(function(result){
//                console.log(result.dataValues.pername);
                expect(result.dataValues.pername).to.equal('John Smith');
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

describe('sys_personcontactinfo', function () {

    before(function(done){
        done();
    });

    it('sys_personcontactinfo add' ,function(done){
        var sys_user = models.sys_personbasicinfo
            .build({
                firstname:'John',
                lastname:'Smith',
                pername:'1111',
                phonenum:'13825354499',
                creator:'mocha',
                modifier:'mocha'
            });
        sys_user
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

    it('sys_personcontactinfo add with wrong phone number' ,function(done){
        var sys_user = models.sys_personbasicinfo
            .build({
                firstname:'John',
                lastname:'Smith',
                pername:'',
                phonenum:'qq13825354499',
                creator:'mocha',
                modifier:'mocha'
            });
        sys_user
            .save()
            .then(function(){
//                console.log('add userinfo sucessfully');
                done();
            })
            .catch(function(err){
//                console.log(err.toString());
                expect(err.toString()).to.equal('SequelizeValidationError: Validation error: must be the phone number with an format like 13512345678');
                done();
            });
    });

    it('sys_personcontactinfo get' ,function(done){
        var sys_user = models.sys_personbasicinfo;
        sys_user.findOne({
            where:{
                firstname:'John',
                createdAT:{
                    $gte:currenttime
                }
            }
        })
            .then(function(result){
//                console.log(result.dataValues.pername);
                expect(result.dataValues.pername).to.equal('John Smith');
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