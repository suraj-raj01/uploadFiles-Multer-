import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Insert = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const [myfile, setMyfile] = useState("");

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  const handleFiles = (e) => {
    // console.log(e.target.files[0]);
    setMyfile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("photo", myfile);
    formData.append("rollno", input.rollno);
    formData.append("name", input.name);
    formData.append("city", input.city);
    let api = "http://localhost:8000/user/insertdata";
    const response = await axios.post(api, formData);
    alert("data inserted success");
    navigate("/display")
  };

  return (
    <div>
      <h1>Insert</h1>

      <Form
        style={{
          width: "450px",
          padding: "30px 20px",
          margin: "60px auto",
          borderRadius: "10px",
          boxShadow: "0 0 2px",
        }}
      >
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={input.name}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            type="number"
            placeholder="Enter rollno"
            name="rollno"
            value={input.rollno}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            type="text"
            placeholder="Enter city"
            name="city"
            value={input.city}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          {/* <Form.Label>Choose file/photo</Form.Label> */}
          <Form.Control type="file" placeholder="" onChange={handleFiles} />
        </Form.Group>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default Insert;
