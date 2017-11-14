var models  = require('../models');
var express = require('express');
var router = express.Router();

//Route Mandatory Params
/*
* name
* type
* */

router.post('/addSource', function(req, res, next) {

    if(req.body.id){
        var obj = {
            name:req.body.name,
            type:req.body.type,
            meta:JSON.stringify(req.body)
        };
        return models.Source.create(obj).then(function (source) {
            console.log("source created:",source);
            res.end(JSON.stringify({success:1,statusCode:201,response:source}))
        },function (err) {
            console.log("error while creating user:",err);
            res.end(JSON.stringify({success:0,statusCode:500,err:err}));
        });
    }
    else {
        res.end(JSON.stringify({success:0,statusCode:400}));
    }
});

router.post('/getTransation', function(req, res, next) {

    if(req.body.id){
        var obj = {
            name:req.body.name
        };
        return models.Source.findAll({where:obj}).then(function (source) {
            console.log("source created:",source);
            res.end(JSON.stringify({success:1,statusCode:201,response:source}))
        },function (err) {
            console.log("error while creating user:",err);
            res.end(JSON.stringify({success:0,statusCode:500,err:err}));
        });
    }
    else {
        res.end(JSON.stringify({success:0,statusCode:400}));
    }
});

module.exports = router;
