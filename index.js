const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

const blog = require('./routes/blog');
const authRoutes = require('./routes/authRoutes')
// Mountt
app.use('/api/v1', blog); 
app.use('/api/v1/auth',authRoutes);

const dbconnect = require("./config/database");
dbconnect();

// start server
app.listen(port,()=>{
  console.log(`App is started at port no  ${port}`);
})

app.get("/",(req,res)=>{
  res.send("this is my homepage");
})