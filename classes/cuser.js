/**
 * Created by root on 6/3/15.
 */

var models = require('../models/index');
var crypto = require('crypto');
var sys_personbasicinfo = models.sys_personbasicinfo;

/**
 * Encrypt password
 *
 * @param {String} password
 * @param {String} rawsalt
 * @return {String}
 * @api public
 */

function encryptPassword (password,rawsalt) {
    var salt=rawsalt+'5595S4decd';
    if (!password) return '';
    try {
        return crypto
            .createHmac('sha1', salt)
            .update(password)
            .digest('hex');
    } catch (err) {
        return null;
    }
}

function Cuser(){

}


Cuser.prototype.getbasicinfobyid = function(personid,phonenum,cb){

};
Cuser.prototype.setbasicinfobyid = function(personid,phonenum,info,cb){

};



/**
 *
 * get auth info by personid
 *
 * @param {String} personid
 * @param {String} plain_password
 * @param {Function} cb sys_personbasicinfo,err
 * @return cb(Object,Err), sys_personbasicinfo
 * @api public
 */

Cuser.prototype.getauthinfobyid = function(personid,plain_password,cb){
    sys_personbasicinfo.findOne({
        where:{
            personid:   personid
        }
    })
        .then(function(sys_user){
            if(sys_user&&plain_password){
                if(sys_user.password==encryptPassword(plain_password,sys_user.personid))
                {cb(sys_user,null)}
                else cb(null,'wrong password')
            }
            else cb(null,'empty')
        })
        .catch(function(err){
            cb(null,err);
        });
};
/**
 *
 * get auth info by phonenum
 *
 * @param {String} phonenum
 * @param {String} plain_password
 * @param {Function} cb sys_personbasicinfo,err
 * @return
 * @api public
 */

Cuser.prototype.getauthinfobyphonenum = function(phonenum,plain_password,cb){
    sys_personbasicinfo.findOne({
        where:{
            phonenum:phonenum
        }
    })
        .then(function(sys_user){
            if(sys_user&&plain_password){
                if(sys_user.password==encryptPassword(plain_password,sys_user.personid))
                    cb(sys_user,null);
                else cb(null,'wrong password')
            }
            else{cb(null,'empty')}
        })
        .catch(function(err){
            cb(null,err);
        });
};


/**
 * set password by personid
 *
 * @param {String} personid
 * @param {String} plain_password
 * @param {Function} cb [success],err
 * @api public
 **/
Cuser.prototype.setpasswordbyid = function(personid,plain_password,cb){
    sys_personbasicinfo.findOne({
        where:{
            personid:   personid
        }
    })
        .then(function (sys_user) {
            if(sys_user){
                sys_user.password=encryptPassword(plain_password,sys_user.personid);
                if(sys_user.password){
                    sys_user.save()
                        .then(function(){
                            cb('success',null)
                        })
                        .catch(function(err){
                            cb(null,err);
                        });
                }
                else {
                    cb(null,'set password failed');
                }
            }
            else {
                cb(null,'empty');
            }
        })
        .catch(function(err){
            cb(null,err);
        })
};

Cuser.prototype.binddevice = function(personid,phonenum,cb){

};

Cuser.prototype.setcontactinfobyid = function(personid,phonenum,cb){

};

Cuser.prototype.getcontactinfobyid = function(personid,phonenum,info,cb){

};



module.exports = Cuser;

