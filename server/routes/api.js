// const { db } = require('./../models');
const temp = require('express');
const api = temp.Router();
const { User } = require('./../models');
const { Poll } = require('./../models');

api.use('/polls', require('./polls'));
// api.use('/users', require('./users'));
api.get('users/:id', async (req, res, next) => {
    try{
        const user = await User.findById( req.params.id );
        res.json( user );
    } catch (err){
        next(err);
    }
});

api.get('/polls', async function( req, res, next){
    try{
        const polls = await Poll.findAll();
        res.send(polls);
    } catch (err) {
        next(err);
    }
});

api.get('/polls/:id', async function( req, res, next){
    try{
        const poll = await Poll.findById( req.params.id )
        res.send(poll);
    } catch (err) {
        next(err);
    }
});
module.exports = api;