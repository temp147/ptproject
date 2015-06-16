/**
 * Created by root on 6/3/15.
 */

var expect = require('expect.js');
var Cuser = require('../../classes/cuser');
var models = require('../../models/index');


var user = new Cuser();

var sys_user = models.sys_personbasicinfo;
//test the basic function of cuser
describe('cuser', function () {
    var phonenum;
//get personid 1  phone number
    before(function(done){
        done();
    });

    it('user set password by id' ,function(done){
        user.setpasswordbyid('1','255477521',function(log,err){
//            console.log(log);
//            console.log(err);
            expect(err).to.equal(null);
            expect(log).to.equal('success');
            done();
        })
    });

    it('user set password by wrong id' ,function(done){
        user.setpasswordbyid('abd','255477521',function(log,err){
//            console.log(log);
//            console.log(err);
            expect(err).to.equal('empty');
            expect(log).to.equal(null);
            done();
        })
    });

    it('user authorized by id with correct password' ,function(done){
        user.getauthinfobyid('1','255477521',function(sys_user,err){
//            console.log(err);
//            console.log(sys_user);
            expect(err).to.equal(null);
            expect(sys_user.dataValues.personid).to.equal(1);
            phonenum=sys_user.dataValues.phonenum;
            done();
        })
    });

    it('user authorized by id with wrong password' ,function(done){
        user.getauthinfobyid('1','123456',function(sys_user,err){
//            console.log(err);
//            console.log(sys_user);
            expect(err).to.equal('wrong password');
            done();
        })
    });

    it('user authorized by wrong id with wrong password' ,function(done){
        user.getauthinfobyid('10000000000sdf','123456',function(sys_user,err){
            expect(err).to.equal('empty');
            done();
        })
    });

    it('user authorized by phone number with correct password' ,function(done){
//        console.log(phonenum);
        user.getauthinfobyphonenum(phonenum,'255477521',function(sys_user,err){
//            console.log(err);
            expect(err).to.equal(null);
            expect(sys_user.dataValues.personid).to.equal(1);
            done();
        })
    });

    it('user authorized by phone number with wrong password' ,function(done){
        user.getauthinfobyphonenum(phonenum,'123456',function(sys_user,err){
//            console.log(err);
//            console.log(sys_user);
            expect(err).to.equal('wrong password');
//            expect(sys_user.dataValues.personid).to.equal(1);
            done();
        })
    });

    it('user authorized by wrong phone number with wrong password' ,function(done){
        user.getauthinfobyphonenum('10000000000sdf','123456',function(sys_user,err){
//            console.log(err);
//            console.log(sys_user);
            expect(err).to.equal('empty');
//            expect(sys_user.dataValues.personid).to.equal(1);
            done();
        })
    });

    it('user authorized by empty phone number with empty password' ,function(done){
        user.getauthinfobyphonenum('','',function(sys_user,err){
//            console.log(err);
//            console.log(sys_user);
            expect(err).to.equal('empty');
//            expect(sys_user.dataValues.personid).to.equal(1);
            done();
        })
    });

    after(function(done){
        done();
    })
});
