const express = require('express');
const db = require('./config/db')
const router = require('./routes');

//start express app
const app = express();

//connect database
db.connect()

// enable data from post/put/patch/delete method
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes init 
router(app)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`connected port ${port}`));