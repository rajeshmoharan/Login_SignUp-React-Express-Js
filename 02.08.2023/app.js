require('dotenv').config();
const express = require('express');
const connect = require('./database/config');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}));


// db connection
connect();


// user routes import
const userRout = require('./routes/user');


app.use('/',userRout);



module.exports = app;