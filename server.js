const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/dbConnections');
const app = express();
const port = process.env.PORT || 3000;
connectDB();


app.use(express.json());
app.get("/api/contacts",(req,res)=>{
    res.send("get all contacts");
})

app.use("/api/contacts", require('./routes/contactsRoutes'));



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})