const express = require('express')
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config()
const connectDB = require('./config/dbConnections');
const app = express();
const port = process.env.PORT || 3000;
connectDB();


app.use(express.json());
app.use("/api/contacts", require('./routes/contactsRoutes'));
app.use("/api/users", require('./routes/userRoutes'));
app.use(require('./routes/clientRoutes'));



app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});