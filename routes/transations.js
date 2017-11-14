var models  = require('../models');
var express = require('express');
var router = express.Router();

//Route Mandatory Params
/*
*sourceName
* amount
* type
* userId
* */

router.post('/addTransation', function(req, res, next) {

    if(req.body.id){
        var obj = {
            sourceName:req.body.sourceName,
            type:req.body.type,
            amount:req.body.amount,
            userId:req.body.id,
            meta:JSON.stringify(req.body)
        };
        return models.Transations.create(obj).then(function (transation) {
            console.log("transation created:",transation);
            res.end(JSON.stringify({success:1,statusCode:201,response:transation}))
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
            userId:req.body.id
        };
        return models.Transations.findAll({where:obj}).then(function (transation) {
            console.log("transation created:",transation);
            res.end(JSON.stringify({success:1,statusCode:201,response:transation}))
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
