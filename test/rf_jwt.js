/**
 * Created by root on 2/19/15.
 */

var superagent = require('superagent');
var expect = require('expect.js');

describe('authenticate api test',function() {
    var token;
//use the correct username and password should get the token
    it('login then createToken', function (done) {
        superagent.post('http://localhost:3000/login/')
            .send({
                username: '13512345678',
                password: 'foobar'
            })
            .end(function (err, res) {
                expect(err).to.eql(null);
                expect(typeof res.body).to.eql('object');
                //console.log(res.body.token.toString().length,res.body);
                expect(res.body.token.toString().length).to.eql(197);
                token = res.body.token;
                done();
            })
    });

//check the username is empty,toolong,wrong. check the password is toolong ,wrong.
    it('login with empty username', function (done) {
        superagent.post('http://localhost:3000/login/')
            .send({
                username: '',
                password: 'foobar'
            })
            .end(function (err, res) {
                expect(err).to.eql(null);
                expect(typeof res.body).to.eql('object');
                expect(res.status).to.eql(500);
                done();
            })
    });

    it('login with long username', function (done) {
        superagent.post('http://localhost:3000/login/')
            .send({
                username: '1351234567890',
                password: 'foobar'
            })
            .end(function (err, res) {
                expect(err).to.eql(null);
                expect(typeof res.body).to.eql('object');
                expect(res.status).to.eql(500);
                done();
            })
    });

    it('login with wrong username', function (done) {
        superagent.post('http://localhost:3000/login/')
            .send({
                username: '23512345678',
                password: 'foobar'
            })
            .end(function (err, res) {
                expect(err).to.eql(null);
                expect(typeof res.body).to.eql('object');
                expect(res.status).to.eql(401);
                done();
            })
    });

    it('login with long password', function (done) {
        superagent.post('http://localhost:3000/login/')
            .send({
                username: '23512345678',
                password: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmaXJzdF9uYW1lIjoiRGVvIiwibGFzdF9uYW1lIjoiSm9obiIsInVzZXJyb2xlIjoxLCJwZXJpZCI6MSwiZWlkIjoxLCJpYXQiOjE0MjQ3NzIwNTR9.JPo3w_VgnjZF5cY7H4Cv9u4bVH0rHtxJUXGTalGgL98'
            })
            .end(function (err, res) {
                expect(err).to.eql(null);
                expect(typeof res.body).to.eql('object');
                expect(res.status).to.eql(500);
                done();
            })
    });


    it('login with wrong password', function (done) {
        superagent.post('http://localhost:3000/login/')
            .send({
                username: '13512345678',
                password: 'foobar11'
            })
            .end(function (err, res) {
                expect(err).to.eql(null);
                expect(typeof res.body).to.eql('object');
                expect(res.status).to.eql(401);
                done();
            })
    });

});
