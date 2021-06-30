const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// get values from evn files 
dotenv.config({ path: './config.env' })
require('./database/connection')

app.use(express.json());

const PORT = process.env.PORT;

// getting userSchema 
// const User = require('./model/userSchema');

//linking router files to make routing easy
app.use(require('./router/auth'))

// middleware
const middleware = (req, res, next) => {
    console.log('middleware')
    next()
}


app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/profile', middleware, (req, res) => {
    res.send('hello profile')
})

app.get('/login', (req, res) => {
    res.send('hello login')
})

app.get('/signup', (req, res) => {
    res.send('hello signup')
})

app.get('/listing', (req, res) => {
    res.send('hello listing')
})



app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})

