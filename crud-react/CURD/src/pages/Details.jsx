import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../style/Detail.css'

const Details = () => {
    const [data, setData] = useState({});
    const {id} = useParams();
     useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`http://localhost:8080/EmployesData/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
<h1><u>Details of Employee</u></h1>
   
    <div className='detailss'>
        <h1>Name : {data.name}</h1>
        <h1>Age : {data.age}</h1>
        <h1>Designation : {data.designation}</h1>
    </div>
    </div>
  )
}

export default Details