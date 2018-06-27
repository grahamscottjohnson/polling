const express = require('express');
const userRouter = express.Router();
const { User } = require('./../models');
const bodyParser = require('body-parser');

userRouter.use(bodyParser.json());

userRouter.post('/', async (req, res, next) => {
    try{
        const user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        });
        res.redirect(`/users/${user.id}`)
    } catch (err) {
        next(err)
    }
});

userRouter.get('/:id', (req, res, next) => {
    res.redirect('/');
});

module.exports = userRouter;