const express = require("express");
const mongoose = require ("mongoose")
const app = express();
const userRoutes = require("./routes/userRoutes")
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
//require('dotenv').config()


app.use(express.json());
app.use(express.urlencoded ({
    extended: true,
}))



app.use('/navigation', userRoutes);

app.get('/', (req,res) => {
    res.send("Hello Word!")
})


app.listen(3001);

    



//cyNhveupkAySMUln
