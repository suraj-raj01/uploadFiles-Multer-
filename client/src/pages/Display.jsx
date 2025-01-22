import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const Display = () => {

    const[mydata,setMydata] = useState([]);

    const loadData=async()=>{
        let api = "http://localhost:8000/user/displaydata";
        try {
            const response = await axios.get(api);
            setMydata(response.data);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(()=>{
        loadData();
    },[])

    const deleteData=async(id)=>{
        let api = "http://localhost:8000/user/deletedata";
        try {
            const response = await axios.post(api,{id:id});
            alert(response.data.msg);
            loadData();
        } catch (error) {
            alert(error);
        }
    }

    const res = mydata.map((key)=>{
        return(
            <>
            <tr>
                <td style={{alignContent:'center'}}>{key.name.toUpperCase()}</td>
                <td style={{alignContent:'center'}}>{key.rollno}</td>
                <td style={{alignContent:'center'}}>{key.city}</td>
                {/* <td>{key.imgname}</td> */}
                <td style={{alignContent:'center',width:'25%'}}><img src={`http://localhost:8000/uploads/${key.imgname}`} alt="" height='100px' width='150px'/>
                <span style={{marginLeft:'50px'}} onClick={()=>{deleteData(key._id)}}> <img src="https://icon-library.com/images/delete-icon-png/delete-icon-png-18.jpg" height='30px' alt="" /> </span>
                </td>
            </tr>
            </>
        )
    })

  return (
    <div>
        <h1>Display</h1>
        <Table striped responsive hover bordered style={{width:'95%',margin:'auto'}}>
            <thead>
                <tr>
                <th>Name</th>
                <th>Rollno</th>
                <th>City</th>
                <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {res}
            </tbody>
        </Table>
    </div>
  )
}

export default Display