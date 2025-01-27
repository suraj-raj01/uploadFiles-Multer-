const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const stuRoute = require("./routes/stuRoute")

mongoose.connect("mongodb://127.0.0.1:27017/MulterUploadFiles").then(()=>{
    console.log("Database Connected!!!")
})

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use("/user",stuRoute);
app.use('/uploads', express.static(path.join(__dirname,'uploads')));

app.listen(PORT,()=>{
    console.log(`Server run on port ${PORT}`)
})