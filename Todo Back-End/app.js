// Core module
const path = require("path");

// External module
const express = require("express");
const cors = require('cors')
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const URI = process.env.MONGODB_URI;

const todoItemRouter = require("./routes/todoRouter");
const errorsController = require("./controller/errors");

const app = express();

app.use(express.urlencoded());
app.use(express.json())
app.use(cors());

app.use("/api/todo", todoItemRouter);
app.use(errorsController.unknownPage);

const PORT = 3000;


if (!URI) {
    throw new Error("MONGODB_URI is not configured");
}

mongoose.connect(URI).then(() => {
    console.log("Mongoose connected to Mongo");
    app.listen(PORT, ()=>{
        console.log(`Server running at address http://localhost:${PORT}/`);
    });
}).catch(err => {
    console.log("Mongoose not connected to Mongo: ", err);
})
