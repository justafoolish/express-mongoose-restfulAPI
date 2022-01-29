const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//connect to mongoose server
const connect = async () => {
    try {
        await mongoose
            .connect(process.env.DB_CONNECT_URL,{})
            .then(() => console.log('Connected to MongoDB'))
            .catch(err => { throw new Error(err) })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect }