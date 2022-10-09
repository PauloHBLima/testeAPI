const mongoose = require("mongoose");
require('dotenv').config()

const dbUser = process.env.DB_USER 
const dbPassword = process.env.DB_PASS //encodeURIComponent('cyNhveupkAySMUln')

mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@apicluster.58rrpir.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
.then(() =>  {
    console.log("Conectamos no Mongoose")
})
.catch((err) => console.log(err))

module.exports = mongoose;