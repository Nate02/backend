require("dotenv").load();

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app= new express();

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
var SignupSchema = new mongoose.Schema({
    title: String,
    content: String,
});
var Signup = mongoose.model('Signup', SignupSchema);

app.use(cors())


app.use(bodyParser.json());


app.post('/beef', function (req, res) {
    var data = req.body;

    var newSignup = new Signup(data);

    console.log('hi')
    newSignup.save(function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data)
            res.send(data)
        }
    })
    console.log(newSignup)


})

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('listening on port', port);
})