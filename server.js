// import express from 'express';
// import bodyParser from 'body-parser';
// import path from 'path';
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();

app.use(express.static(path.resolve(__dirname)))

app.get('/', function( req, res ){
    console.log('serving index.html')
    // set Header
    // res.setHeader('Content-Type', 'text/html');

    // let url = path.join(__dirname, 'index.html');
    // res.sendFile( url );

    res.sendFile('index.html');    
});

const PORT = 3000;

app.listen(PORT, function(){
    console.log('Running on port ' + PORT);
});