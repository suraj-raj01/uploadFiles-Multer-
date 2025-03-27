const StuModel = require("../models/stuModel")

const insertData = async (req, res) => {
    const { name, rollno, city } = req.body;
    const imgname = req.file.filename;
    const Data = await StuModel.create(
        {
            name:name,
            rollno:rollno,
            city:city,
            imgname:imgname
        }
    )

    res.send("OK");
}

const displayData = async(req,res)=>{
    try {
        const Data = await StuModel.find();
        res.status(200).send(Data);
    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteData=async(req,res)=>{
    const {id} = req.body;
    try {
        const Data = await StuModel.findByIdAndDelete(id);
        res.status(200).send({msg:"Data delete success!!"})
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    insertData,
    displayData,
    deleteData
}