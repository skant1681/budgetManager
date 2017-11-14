var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {

    if((req.body.email || req.body.phoneNumber) && req.body.password){

        var obj = {
            name:req.body.name,
            userName:req.body.userName,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            password:req.body.password
        };
        return models.Users.create(obj).then(function (user) {
            console.log("user created:",user);
            delete user["dataValues"].password;
            res.end(JSON.stringify({success:1,statusCode:201,response:user}))
        },function (err) {
            console.log("error while creating user:",err);
            res.end(JSON.stringify({success:0,statusCode:500,err:err}));
        });
    }
    else {
        res.end(JSON.stringify({success:0,statusCode:400}));
    }
});

router.post('/verifyUser', function(req, res, next) {
    res.end(JSON.stringify({success:1,statusCode:201,response:user}))
});

router.post('/login', function(req, res, next) {
    console.log("HI Iam")
    if(req.body && (req.body.userName ||req.body.phoneNumber || req.body.email) && req.body.password){
        var searchQuery = {};
        if(req.body.password!="") {
            searchQuery.password = {$eq: req.body.password};
        }
        else {
            console.log("empty password");
            res.end(JSON.stringify({success:0,statusCode:404}));
        }

        if(req.body.userName && req.body.userName!="") {
            searchQuery.userName = {$eq: req.body.userName};
        }
        else if(req.body.phoneNumber && req.body.phoneNumber!="") {
            searchQuery.phoneNumber = {$eq: req.body.phoneNumber};
        }
        else if(req.body.email && req.body.email!=""){
            searchQuery.email = {$eq: req.body.email};
        }
        else {
            console.log("empty userName,phoneNumber,email");
            res.end(JSON.stringify({success:0,statusCode:404}));
        }


        models.Users.findAll({where:searchQuery}).then(function (user) {
            if(user.length==1) {
                delete user[0].dataValues.password;
                delete user[0].dataValues.createdAt;
                delete user[0].dataValues.updatedAt;
                res.end(JSON.stringify({success:1,statusCode:200,response:user[0].dataValues}))
            }
            else {
                console.log("couldn't find user/unique user",user);
                res.end(JSON.stringify({success:0,statusCode:404}));
            }
        },function (err) {
            console.log("DB query error occur",err);
            res.end(JSON.stringify({success:0,statusCode:500}));
        });
    }
    else {
        console.log("Incomplete Payload")
        res.end(JSON.stringify({success:0,statusCode:400}));
    }
});

router.post('/updateProfile', function(req, res, next) {
    res.end(JSON.stringify({success:200}));
});

router.post('/changePassword', function(req, res, next) {
    res.end(JSON.stringify({success:200}));
});

router.post('/forgotPassword', function(req, res, next) {
    res.end(JSON.stringify({success:200}));
});

router.post('/resetPassword', function(req, res, next) {
    res.end(JSON.stringify({success:200}));
});

function encriptPassword() {

}

module.exports = router;
