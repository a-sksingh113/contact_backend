const express = require('express')
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config()
const connectDB = require('./config/dbConnections');
const app = express();
const port = process.env.PORT || 3000;
connectDB();


app.use(express.json());
app.use("/api/contact", require('./routes/contactsRoutes'));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})