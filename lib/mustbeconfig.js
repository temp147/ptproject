/**
 * Created by root on 1/17/15.
 */

module.exports = function(config) {

    config.routeHelpers(function (rh) {
        rh.getUser(function(req, cb){
            //console.log(req.user);
            cb(null, req.user);
        });

        rh.notAuthorized(function (req, res, next) {
            res.status(403).send("not authorized");
        });

        rh.notAuthenticated(function (req, res, next) {
            res.status(401).send("not authenticated")
        });

        rh.parameterMaps(function(params){
            //map the params via the activity name.
            params.map("admin.view",function(req){
                return{
                    id:req.params.id
                }
            })
        })
    });

    config.userIdentity(function(id){
        // determine if this user is authenticated or not
        id.isAuthenticated(function(user, cb){
            // note that the "user" in this case, is the user
            // that was supplied by the routeHelpers.getUser function
            //because the authentication is token over by the JWT ,all the user is  authenticated here.
            //console.log(user);
            var isAuthenticated = false;
            if (user) {
                isAuthenticated = true; //user.isLogin()
            }
            cb(null, isAuthenticated);
        });
    });

    config.activities(function(activities){
        // provide a global "allow" override for special users.
        // alternatively, use the "activity" param to run logic
        // against who can / cannot access that activity
        activities.allow(function(identity,activity,cb){
            var user = identity.user;
            var allow = false;
            //console.log(user);
            if(user.userrole==1){
                allow=true;
            }
            cb(null,allow);
        });
        // provide a global "deny" override for people that should
        // never be able to do anything.
        // alternatively, use the "activity" param to run logic
        // against who can / cannot access that activity

        activities.deny(function(identity, activity, cb){
            var user = identity.user;
            var deny = false;
            //console.log(user);
            if (user.userrole==10){
                deny = true;
            }
            cb(null, deny);
        });


        activities.can("admin.view", function(identity, params, cb){
            // normally, you would make calls to your database and
            // check if the logged in person is allowed to see the
            // user list, or something like that.
            //below is the official authorization process.
            /*
             someLibrary.checkrights(user, function(err, result){
             if (err) { return cb(err); }

             var allow = false;
             if (result.foo){
             allow = true;
             }
             cb(null, allow)
             */
            identity.isAuthenticated(function(err, isAuth){
                if(err) return cb(err,false);
                if(isAuth){
                    var allow=false;
                    if(params.id<identity.user.eid*10){
                        allow=true;
                    }
                    return cb(null,allow);
                }
                return cb(err, isAuth);
            });
        });
    })
};

//TODO: complete the authorization frame work(mustdo)