const userSchema=require("../model/userSchema")

const createUser=async function(req,res){
    let data=req.body
    let saveData=await userSchema.create(data)
    res.send(saveData)
}
module.exports.createUser=createUser