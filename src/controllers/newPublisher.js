const models=require("../models/newPublisher")

const createPublisher=async function(req,res){
    const data=req.body
    const saveData=await models.create(data)
    console.log(saveData)
}

const getAllPublisher=async function(req,res){
    const saveData=await models.find()
    console.log(saveData)
}
module.exports.createPublisher=createPublisher
module.exports.getAllPublisher=getAllPublisher