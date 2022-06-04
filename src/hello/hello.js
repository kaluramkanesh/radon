const x = require("underscore")
function lodashChunk() {
    const m = x.chunk(["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], 4)
    console.log(m)
}
function loDashTail() {
    const t = x.tail([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])
    console.log(t)
}
function fromPairs() {
    const u = x.union([["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]

    ])
    // const u=x.union([2,3,4,5,6],[2,5,8,0],[1,3,6])
    console.log(u)
}

module.exports.lodashChunk = lodashChunk
module.exports.loDashTail = loDashTail
module.exports.lodashUnion = fromPairs