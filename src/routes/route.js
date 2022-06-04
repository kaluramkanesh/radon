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
router.get("/test-me", function (req, res) {
    res.send("Hello")
})
// router.get('/all/movies', function (req, res) {
//     console.log(req);
//     let array = ['RRS', 'PUSHPA', 'KICK', 'SARAY', 'JANIDUMAN']
//     res.send(array);
// });

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
    // for (let i = 1; i < movies.length ; i++) {
    //     if (s === movies[i]) {
    //         res.send(movies[i])
    //     }
    // }
    res.send(movies[req.params.indexNumber])
})

router.get("/GET/movies2/:indexNumber", function (req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    const s = req.params.indexNumber
    console.log(s)
    // for (let i = 1; i < movies.length; i++) {
    //     if (s === movies[i]) {
    //         res.send(movies[i])
    //     }
    //     else {
    //         res.send("use a valid index in an error message.")
    //     }
    // }
    let l = movies.length

    if (s < l) {
        res.send(movies[req.params.indexNumber])
    }
    else {
        res.send("use a valid index in an error message.")
    }
})
router.get("/GET/film", function (req, res) {
    // console.log(req)
    const f = [
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
    res.send({ movies: f })
})
router.get("/GET/films/:filmId", function (req, res) {
    let arr = [{
        'id': 1,
        'name': 'The Shining'
    }, {
        'id': 2,
        'name': 'Incendies'
    }, {
        'id': 3,
        'name': 'Rang de Basanti'
    }, {
        'id': 4,
        'name': 'Finding Nemo'
    }]
    let s=req.params.filmId
    let l=arr.length
    if(s<l){
        res.send(arr[req.params.filmId])
    }
    else{
        res.send("No movie exists with this id")
    }

})
router.get("/sol", function (req, res) {
    let arr = [1, 2, 3, 5, 6, 7]
    let l = arr.length
    let total = Math.floor((l + 1) * (l + 2)) / 2
    for (let i = 0; i < l; i++) {
        total = total - arr[i]//22-5 17-6 11-7 4
    }
    //   console.log(total)
    res.send({ total: total })
    //res.sendStatus(total)   
});
router.get("/sol2", function (req, res) {
    let arr = [33, 34, 36, 37, 38]
    let len = arr.length

    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }

    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let consecutiveSum = (len + 1) * (firstDigit + lastDigit) / 2
    let missingNumber = consecutiveSum - total

    res.send({ data: missingNumber });
});

module.exports = router;
// adding this comment for no reason