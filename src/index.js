const express = require('express');
const db = require('./config/db')
const router = require('./routes');
const methodOverride = require('method-override');
const filtersMiddleware = require('./middlewares/filters.middleware')
const { validateFilterParams } = require('./middlewares/validate.middleware')

// start express app
const app = express();

// connect database
db.connect()

// middleware method to override default POST / GET method to PUT / PATCH / DELETE
app.use(methodOverride('_method'))

// customize filter middleware
/** Validate query param using Joi first then verify every singles query */
app.use(validateFilterParams);
app.use(filtersMiddleware);

// enable data from post/put/patch/delete method
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes init 
router(app)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`connected port ${port}`));