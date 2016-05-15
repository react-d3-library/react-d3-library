const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('static'));

// render index page
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + './static'));
})

app.get('/IMG_1736.JPG', function(req,res){
  res.sendFile(path.join(__dirname + './static/IMG_1736.JPG'));
})

app.get('/us.json', function(req,res){
  res.sendFile(path.join(__dirname + './static/us.json'));
})

app.get('/usCongress113.json', function(req,res){
  res.sendFile(path.join(__dirname + './static/usCongress113.json'));
})

app.get('/dji.csv', function(req,res){
  res.sendFile(path.join(__dirname + './static/dji.csv'));
})

app.get('/data.tsv', function(req,res){
  res.sendFile(path.join(__dirname + './static/data.tsv'));
})

app.listen(3000);
