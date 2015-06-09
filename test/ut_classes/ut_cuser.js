/**
 * Created by root on 6/3/15.
 */

var expect = require('expect.js');
var user = require('../../classes/cuser');

//test the basic function of cuser
describe('cuser', function () {
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
            done();
        })
    });

    it('user authorized by id with wrong password' ,function(done){
        user.getauthinfobyid('1','123456',function(sys_user,err){
//            console.log(err);
//            console.log(sys_user);
            expect(err).to.equal('wrong password');
//            expect(sys_user.dataValues.personid).to.equal(1);
            done();
        })
    });

    it('user authorized by wrong id with wrong password' ,function(done){
        user.getauthinfobyid('10000000000sdf','123456',function(sys_user,err){
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
