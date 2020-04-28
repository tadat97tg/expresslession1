var express = require('express');
var app = express();
var port = 3000;

app.get("/",(req,res)=> res.send("tao là đạt đây hí hí"));
app.listen(port, ()=> console.log('Server listening on port' + port));
