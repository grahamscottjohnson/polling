const { db } = require('./../models');
const api = require('express').Router;

api.use('/polls', require('./polls'));

module.exports = api;