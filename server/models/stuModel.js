const mongoose = require("mongoose");
const stuSchema = new mongoose.Schema({
    name:String,
    rollno:Number,
    city:String,
    imgname:String
})

module.exports = mongoose.model("student",stuSchema);