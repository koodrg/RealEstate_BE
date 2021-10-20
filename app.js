const express = require('express');
const router = express.Router();
var app = express() ;
const expressEjsLayouts = require('express-ejs-layouts');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var session = require("express-session");
var flash = require("connect-flash");
// var cors = require('cors');
app.use(bodyParser.json());

require("dotenv/config");

const {
    categoriesApiRoute,
    realEstateApiRoute,
    utilitiesApiRoute,
    userApiRoute
} = require('./src/routes/index')

app.use(bodyParser.urlencoded({ extended: true }))
const authRoute = require('./src/routes/auth')
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000},
    resave: false,
    saveUninitialized:false
}));

app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    next();
  });

app.use('/', authRoute);

//routes API
app.use('/users', userApiRoute);
app.use('/categories', categoriesApiRoute);
app.use('/utilities', utilitiesApiRoute);
app.use('/real-estate', realEstateApiRoute);


mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
    () => {
      console.log("connect to DB");
    }
);

app.listen(8080, () => {
    console.log('Listen to port 8080')
})