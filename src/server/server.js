const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('static'));

// render index page
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + './static'));
})

app.listen(3000);
