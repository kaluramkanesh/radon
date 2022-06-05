const express = require('express');
const router = express.Router();
const usermodel = require("../model/userSchema")
// const playsArray = require("./playsArray")
const userController = require("../controller/userController")
router.get("/test-me", function (req, res) {
    res.send("Hell Kaluram this is an api for testing the code.........")
})
router.post("/players", function (req, res) {
    const players = [{
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
    ]
    let data = req.body.name
    let sData = req.body
    let newArray
    let l = players.length
    console.log(sData)
    console.log(data)
    for (let i = 0; i < l; i++) {

        // console.log(players[i].name)
        if (data === players[i].name) {
          return res.send("Your aleardy axist");
        }
        else {
            newArray = players.concat(sData)
            // res.send({ Players:newArray })
        }

    }
    res.send({pyayers:newArray})

    //res.send("Done")
});
router.post("/createUser", userController.createUser)
// router.post("/post-api", function (req, res) {
//     res.send("Hello kaluram this is an post api")
// })
// router.post("/post-api1", function (req, res) {
//     const a = [12, 56, 78, 90, 32]
//     res.send(a)
// })
// router.post("/post-api2", function (req, res) {
//     res.send({ msg: "Hello", status: true })
// })
// router.post("/post-api3", function (req, res) {
//     let n = req.body.name
//     let p = req.body.password
//     console.log(n, p)
//     console.log(req.body)
//     res.send(req.body)
// })
// router.post("/post-api4", function (req, res) {
//     let arr = [12, "Kaluram", 78]
//     console.log(arr)
//     res.send({ msg: arr, status: true })
// })

module.exports = router;
// adding this comment for no reason