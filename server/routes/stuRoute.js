const express = require("express");
const route = express.Router();
const multer = require("multer");
const stuController = require("../controllers/stuController")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Save files to uploads directory
    },
    filename: (req, file, cb) => {
      cb(null, Date.now()+file.originalname); // Keep original file name
    }
  });
const upload = multer({ storage: storage });

route.post("/insertdata",upload.single('photo'), stuController.insertData)
route.get("/displaydata", stuController.displayData)
route.post("/deletedata", stuController.deleteData)

module.exports = route;