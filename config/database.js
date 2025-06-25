const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("Db connection is succesfuull"))
    .catch((error)=>{
        console.log("error in DB connection");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbconnect;