const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static( path.resolve(__dirname, './../../public') ));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded: false}))


app.get('/', function( req, res, next ){
    try{
        res.sendFile('index.html');    
    } catch (err) {
        next(err)
    }
});

app.use('/api', require('./api'));
app.use('/users', require('./users'));

app.use( (req, res, next) => {
    res.status(404);
    res.send('<h1>Page Not Found</h1><p>We could not find the resource you are looking for</p>');
});
app.use( (err, req, res, next) => {
    console.error(err);
    res.status(500);
    res.send('<h1>Oops!</h1><p>We broke something. Give us some time to fix it</p>');

})

module.exports = app;