const express = require('express');
var bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
// const app = express();
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://kaluram:fiyYMTvIh9WPDp9U@cluster0.4yhyg.mongodb.net/?retryWrites=true&w=majority",{
    useNewurlParser:true
})
.then(() => console.log("Mongodb is connected succesfully........"))
.catch(err=>console.log(err))
app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
