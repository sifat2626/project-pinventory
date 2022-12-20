const {readdirSync} = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
// const errorHandler = require("./middleWares/errorMiddleware");
const cookieParser = require('cookie-parser');

//middlewares
app.use(helmet());
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//routes middleware
readdirSync("./routes").map(r=>app.use("/api/v1",require(`./routes/${r}`)));

//server
const port = process.env.PORT||8000;

//Error middleware
// app.use(errorHandler)

//connect to DB and start server
mongoose
        .connect(process.env.DATABASE)
        .then(()=>{
            console.log("DB connected")
            app.listen(port,()=>console.log("Server is running on port "+port));
        })
        .catch((error)=>console.log(error));

