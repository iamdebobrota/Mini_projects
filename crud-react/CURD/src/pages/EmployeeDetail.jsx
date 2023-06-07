import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import '../style/Detail.css'
const EmployeeDetails = ({ id, name, age, getdata,designation }) => {
    
  const DeleteData = () => {
    axios
      .delete(`http://localhost:8080/EmployesData/${id}`)
      .then((res) => {
        alert("Data deleted Sussecsfully");
        getdata();
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  return (
    <tr>
  <td>{id}</td>
  <td>{name}</td>
  <td>{age}</td>
  <td>{designation}</td>
    
  <td><button className="btn1" onClick={DeleteData}>Delete</button></td> 
  <td> <Link to={`/edit/${id}`}><button className="btn2">Edit</button></Link></td>   
  <td> <Link to={`/detail/${id}`}><button className="btn3">Details</button></Link></td>   

    </tr>
  );
};

export default EmployeeDetails;
