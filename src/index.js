const express = require('express');
const cors = require('cors')
const db = require('./config/db')
const routes = require('./routes');
const path = require("path");
const methodOverride = require('method-override');
const filtersMiddleware = require('./middlewares/filters.middleware')
const multer = require('multer')
const { validateFilterParams } = require('./middlewares/validate.middleware')

// start express app
const app = express();
const upload = multer();

// connect database
db.connect()

//cors policy
app.use(cors({
    origin: '*',
    // credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
}));

// middleware method to override default POST / GET method to PUT / PATCH / DELETE
app.use(methodOverride('_method'))

// customize filter middleware
/** Validate query param using Joi first then verify every singles query */
app.use(validateFilterParams);
app.use(filtersMiddleware);

// enable data from post/put/patch/delete method
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// form-data
app.use(upload.array())

// routes init
app.use('/api', routes);

// static file
app.use(express.static(path.join(__dirname, "../public/")));

// client site for testing
app
    .use('/user', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })
    .use('/form', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/form.html'))
    })


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`connected port ${port}`));