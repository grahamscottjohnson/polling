const express = require('express');
const pollsRouter = express.Router();
const { Poll } = require('./../models');

pollsRouter.get('/', async function( req, res, next){
    try{
        const polls = await Poll.findAll();
        res.send(polls); //pass in polls as prop to component
    } catch (err) {
        next(err);
    }
});

pollsRouter.get('/:id', async function( req, res, next){
    try{
        const poll = await Poll.findById( req.params.id )
        res.send(poll);
    } catch (err) {
        next(err);
    }
});

module.exports = pollsRouter;