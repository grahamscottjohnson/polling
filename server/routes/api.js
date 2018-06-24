// const { db } = require('./../models');
const temp = require('express');
const api = temp.Router();
const { User } = require('./../models');

api.use('/polls', require('./polls'));
// api.use('/users', require('./users'));
api.get('users/:id', async (req, res, next) => {
    try{
        const user = await User.findById( req.params.id );
        res.send( user );
    } catch (err){
        next(err);
    }
});
module.exports = api;