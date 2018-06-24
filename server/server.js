const app = require('./routes/app');
const { db } = require('./models');
const PORT = process.env.PORT || 3000;

db.authenticate()
.then( _ => {
    console.log('Connected to databse');
});

async function init(){
    await db.sync({
        force: true,
        logging: false,
    });
    app.listen(PORT, function(){
        console.log('Running on port ' + PORT);
    });
}
init();