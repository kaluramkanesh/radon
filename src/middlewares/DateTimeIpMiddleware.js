const Mid1=function(req,res,next){
    console.log("Hello i am middleware 1")
    next()
}

module.exports.Mid1=Mid1