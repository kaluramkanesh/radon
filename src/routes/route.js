const express = require('express');
// const underscore=require("underscore")
const helloChunk = require("../hello/hello")
const router = express.Router();
router.get('/chunk', function (req, res) {
    helloChunk.lodashChunk()
    helloChunk.loDashTail()
    helloChunk.lodashUnion()
    res.send("Done")
});

//Create an API for GET /movies that returns a list of movies. Define an array of movies
// in your code and return the value in response.
router.get("/GET/movies", function (req, res) {
    const movies = ["Rang de basanti", "The shining", "RRR", "KGF", "Yamla pagla diwana", "Krantivir"]
    res.send(movies)
})

//Create an API GET /movies/:indexNumber (For example GET /movies/1
// is a valid request and it should return the movie in your array at index 
//1). You can define an array of movies again in your api
router.get("/GET/movies1/:indexNumber", function (req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    const s = req.params.indexNumber
    console.log(s)
    // for (let i = 0; i < movies.length - 1; i++) {
    //     if (s === movies[i]) {
    //         res.send(movies[i])
    //     }
    // }
    //res.send(movies[req.params.indexNumber])
})

router.get("GET/movies2/:indexNumber", function (req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    const s = req.params.indexNumber
    for (let i = 0; i < movies.length - 1; i++) {
        if (s === movies[i]) {
            res.send(movies[i])
        }
        else {
            res.send("use a valid index in an error message.")
        }
    }
})
router.get("GET/film", function (req, res) {
    console.log(req)
     f = [
        {
            'id': 1,
            'name': 'The Shining'
        },
        {
            'id': 2,
            'name': 'Incendies'
        },
        {
            'id': 3,
            'name': 'Rang de Basanti'
        },
        {
            'id': 4,
            'name': 'Finding Nemo'
        }
    ]
    // res.send(f)
})
module.exports = router;
// adding this comment for no reason