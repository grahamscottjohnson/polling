const express = require('express');
const pollsRouter = express.Router();
const { Poll } = require('./../models');

//need bodyParser
pollsRouter.post('/', async (req, res, next) => {
    console.log('made it to polls route')
    try{
        //array in a form is awkward
        const responses = [];
        let responseIndex = 0;
        while (req.body[responseIndex]){
            responses.push(req.body[responseIndex])
            responseIndex += 1;
        }
        const poll = await Poll.create({
            question: req.body.question,
            response: responses,
            //add the user who made it
        });
        console.log( `polls post request 'created' this poll:`, poll);
        res.redirect('/');
    } catch (err){
        next(err);
    }
});

module.exports = pollsRouter;