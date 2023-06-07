import axios from 'axios';
import React, { useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom';
import '../style/Add.css'
const EditEmploye = () => {
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [designation,setDesignation] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();
  const EditData =() => {
    let obj={
      name:name,
      age:age,
      designation : designation,

  }
    axios.put(`http://localhost:8080/EmployesData/${id}`,obj).then((res)=> {
      navigate("/");
    }).catch((error)=> {
        console.log(error);
    })

  }
  return (
    <div className='container'>
    <div className='inputs'>
     <h1 className='heading'>Edit Employee</h1><br/>
   <input className="inputtype" type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"/><br/><br/>
    <input className="inputtype" type="number" onChange={(e)=>{setAge(e.target.value)}} placeholder="Enter age"/><br/><br/>
    <input className="inputtype" type="text" onChange={(e)=>{setDesignation(e.target.value)}} placeholder="Enter Designation"/><br/><br/>
    <button className='btn' onClick={EditData}>Update</button>
    </div>
    </div>
  )
}

export default EditEmploye