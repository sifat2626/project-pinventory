const {readdirSync} = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/errorMiddleware');

//security middleware
app.use(helmet());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

//routes middlewares
readdirSync("./routes").map(r=>app.use("/api/v1",require(`./routes/${r}`)))
//server
const port = process.env.PORT||8000;
//error middlewares
app.use(errorHandler);
//server
mongoose.connect(process.env.DATABASE)
.then(()=>{
  app.listen(port,()=>{
    console.log("Server is running on port "+port);
  })
})
.catch((error)=>console.log(error));

