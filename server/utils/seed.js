const connection = require('../config/connection');
const { User, Exercise } = require('../models');
const { users, exercises } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    let exerciseCheck = await connection.db.listCollections({ name: 'exercises' }).toArray();
    if (exerciseCheck.length) {
        await connection.dropCollection('exercises');
    } let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    const userData = await User.create(users);
    const exerciseData = await Exercise.create(exercises);
    console.info('Seeding complete! 🌱');
    process.exit(0);  

});