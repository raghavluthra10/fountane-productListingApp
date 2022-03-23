const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

// get values from evn files 
dotenv.config({ path: './config.env' })
require('./database/connection')

app.use(express.json());

const PORT = process.env.PORT || 5000;

//linking router files to make routing easy
app.use(require('./router/auth'))

if(process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"))
}

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})

