const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/voting');

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        },
    }
});

const Poll = db.define('poll', {
    question: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    response: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
    }
});

const Response = db.define('response', {
    response: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

User.belongsToMany(Poll, {through: 'userpoll'});
Poll.belongsToMany(User, {through: 'userpoll'});
Response.belongsToMany(User, {through: 'userresponse'});
User.belongsToMany(Response, {through: 'userresponse'});


module.exports = {
    db,
    User,
    Poll,
    Response,
}