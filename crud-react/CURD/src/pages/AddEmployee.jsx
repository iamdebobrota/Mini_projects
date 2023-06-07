import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Add.css";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [designation, setDesignation] = useState("");

  const navigate = useNavigate();

  const PostData = () => {
    let obj = {
      name: name,
      age: age,
      designation: designation,
    };
    console.log(obj);

    axios
      .post("http://localhost:8080/EmployesData", obj)
      .then((res) => {
        console.log(res.data);
        alert("Data Added Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="inputs">
        <h1 className="heading">Add Employee</h1>
        <br />
        <input
          className="inputtype"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your FullName"
        />
        <br />
        <br />
        <input
          className="inputtype"
          type="number"
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Your Age"
        />
        <br />
        <br />
        <input
          className="inputtype"
          type="text"
          onChange={(e) => setDesignation(e.target.value)}
          placeholder="Enter Your Designation"
        />
        <br />
        <br />
        <button className="btn" onClick={PostData}>
          {" "}
          Add{" "}
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;
