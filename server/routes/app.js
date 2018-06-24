const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static( path.resolve(__dirname, '../public') ));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded: false}))

app.use('/api', require('./api'))

app.get('/', function( req, res ){
    console.log('serving index.html')
    res.sendFile('index.html');    
});

module.exports = app;