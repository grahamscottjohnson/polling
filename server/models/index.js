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

const UserPoll = db.define('userpoll');

User.belongsToMany(Poll, {through: UserPoll});
Poll.belongsToMany(User, {through: UserPoll});
Response.belongsToMany(UserPoll, {through: 'userpollresponse'});
UserPoll.belongsToMany(Response, {through: 'userpollresponse'});


module.exports = {
    db,
    User,
    Poll,
    Response,
}