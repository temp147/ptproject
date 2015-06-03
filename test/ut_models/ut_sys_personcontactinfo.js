/**
 * Created by root on 6/3/15.
 */


var expect = require('expect.js');
var models = require('../../models/index');

var currenttime = new Date();

describe('sys_personcontactinfo', function () {

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
//                console.log(result.dataValues.personid);
                personid=result.dataValues.personid;
                done();
            });
    });



    it('sys_personcontactinfo add with wrong qq number' ,function(done){
        var sys_usercontinfo = models.sys_personcontactinfo
            .build({
                personid:personid,
                qqnumber:'udn1111',
                emailaddress:'test@123.com',
                creator:'mocha',
                modifier:'mocha'
            });
        sys_usercontinfo
            .save()
            .then(function(){
//                console.log('add userinfo sucessfully');
                done();
            })
            .catch(function(err){
//                console.log(err.toString());
                expect(err.toString()).to.equal('SequelizeValidationError: Validation error: must be number');
                done();
            });
    });


    it('sys_personcontactinfo add with wrong email account' ,function(done){
        var sys_usercontinfo = models.sys_personcontactinfo
            .build({
                personid:personid,
                qqnumber:'111111',
                emailaddress:'test123.com',
                creator:'mocha',
                modifier:'mocha'
            });
        sys_usercontinfo
            .save()
            .then(function(){
//                console.log('add userinfo sucessfully');
                done();
            })
            .catch(function(err){
//                console.log(err.toString());
                expect(err.toString()).to.equal('SequelizeValidationError: Validation error: Validation isEmail failed');
                done();
            });
    });



    it('sys_personcontactinfo add' ,function(done){
        var sys_usercontinfo = models.sys_personcontactinfo
            .build({
                personid:personid,
                qqnumber:'123456',
                emailaddress:'test@123.com',
                creator:'mocha',
                modifier:'mocha'
            });
        sys_usercontinfo
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



    it('sys_personcontactinfo get' ,function(done){
        var sys_usercontinfo = models.sys_personcontactinfo;
        sys_usercontinfo.findOne({
            where:{
                personid:personid
            }
        })
            .then(function(result){
//                console.log(result.dataValues);
                expect(result.dataValues.emailaddress).to.equal('test@123.com');
                done();
            })
            .catch(function(err){
//                console.log(err.toString());
                expect(err).to.equal(null);
                done();
            });
    });

    it('sys_personcontactinfo del' ,function(done){
        var sys_usercontinfo = models.sys_personcontactinfo;
        sys_usercontinfo.findOne({
            where:{
                personid:personid,
                createdAT:{
                    $gte:currenttime
                }
            }
        })
            .then(function(sys_user){
//                console.log(result.dataValues.pername);
                sys_user.destroy({force: true}).then(function(){
                    done();
                });
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