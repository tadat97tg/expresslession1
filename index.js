var express = require('express');
var app = express();

var userRoute = require('./routes/user.route.js');

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get("/", function(req,res){
	res.render('index');
})

app.use('/users',userRoute);

app.listen(port, ()=> console.log('Connecting to ' + port))