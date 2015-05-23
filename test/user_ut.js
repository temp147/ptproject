/**
 * Created by root on 5/23/15.
 */
/**
 * Created by root on 1/8/15.

var timetrack = require('../app.js');
var expect = require('expect.js');

// TODO:add all unit test function~~
describe('unit test work',function(){
    //delete all work and add one work.
    before(function(done) {
        timetrack.delAllWork();
        done();
    });
    //verify if work is added successfully.
    it('add work(should have one work)',function(done){
        timetrack.addWork(1,'2014-01-01',1,function(err){
            if(err){
                console.log(err);
            }
            timetrack.countWork(function(err,rows){
                expect(err).to.equal(null);
                //console.log(rows);
                expect(rows[0].counts).to.equal(1);
                done();
            });
        });
    });

    after(function(done){
        timetrack.delAllWork();
        done();
    })
});
*/

var models = require('./../models/index.js');
models.user.sync().then(function(){
    console.log('OK');
}).catch(function(error){
    console.log('error');
})