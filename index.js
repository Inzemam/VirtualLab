var express = require("express");
var app     = express();
app.use(express.static(__dirname + '/routes'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/public'));
//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/DCDCConverters'));

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/DCDCConverters',function(req,res){
  res.sendFile(__dirname +'/DCDCConverters/index.html');
  //It will find and locate index.html from View or Scripts
});

app.listen(80);
