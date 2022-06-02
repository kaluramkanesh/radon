const express = require('express');
const underscore=require("underscore")
const router = express.Router();
router.get('/test-me', function (req, res) {
    let firstElement=underscore.first(["Kaluram","Seema","Rahul","Manish"])
    console.log("The first receved from underScore",firstElement)
    console.log(underscore.last([23,4,5,6,7,8,91]))
    res.send('My first ever api! Hello kaluram,How are you dear?')
});
router.get("/hello",function(req,res){
    res.send("Hello ram this is hello api's")
})
router.get("/candidates",function(req,res){
    console.log("query paramets for this request are ",JSON.stringify(req.query))
    let name=req.query.name
    let state=req.query.state
    let district = req.query.district
    console.log("name=>",name)
    console.log("Condidates state ",state)
    console.log("candedates distric ",district)
    let candedates=["Kaluram","Rahul","Manish","Hemraj"]
    res.send(candedates)
})

router.get("/candidates1/:candidatesname",function(req,res){
    console.log("params paramets for this request are ",JSON.stringify(req.params))
    console.log("candidates name is ",req.params.candidatesname)
    res.send(req.params.candidatesname)
})

module.exports = router;
// adding this comment for no reason