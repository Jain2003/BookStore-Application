const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/book-routes.js");
const app = express();

//middlewares 
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/books", router);

// connection with database.
mongoose.connect("mongodb+srv://Sahaj:Sahaj@cluster0.9xzrpdx.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Successful connection with database"))
  .then(()=> {
    app.listen(5000, ()=>{
        console.log("Server active and running on port 5000");
    })
  }).catch((err) =>{
    console.log("err:" + err);
  })
