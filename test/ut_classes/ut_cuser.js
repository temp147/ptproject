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


    it('user authenticate' ,function(done){
        user.getauthinfo('1','1',function(log,err){
//            console.log(log);
            expect(log).to.equal('success');
            done();
        })
    });

    after(function(done){
        done();
    })
});
