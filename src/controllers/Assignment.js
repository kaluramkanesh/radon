const { json } = require("body-parser");

const newTime= async function(req,res){
    const year=new Date().getFullYear();
    const month=new Date().getMonth();
    const day=new Date().getDate();
    const hour=new Date().getHours();
    const minutes=new Date().getMinutes();
    const seconds=new Date().getSeconds();
    console.log(`${year}:${month+1}:${day}:${hour}:${minutes}:${seconds}`)
    res.send(`${year}:${month+1}:${day}:${hour}:${minutes}:${seconds}`)
}
const localIpAddress=function(JSON){
    console.log(JSON.ip)
}
const localIp=async function(req,res){
 const ip=req.ip
 console.log(ip)
 res.send(ip)
}

module.exports.newTime=newTime
 module.exports.localIp=localIp
