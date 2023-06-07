import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeDetails from "./EmployeeDetail";
import "../style/Detail.css";
const Employee = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);
  useEffect(() => {
    getData();
  }, [num]);

  const getData = () => {
    axios
      .get(`http://localhost:8080/EmployesData/?_page=${num}&_limit=5`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="tables">
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => {
            return (
              <EmployeeDetails
                id={elem.id}
                name={elem.name}
                age={elem.age}
                getdata={getData}
                designation={elem.designation}
              />
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button
          className="pagbtn"
          disabled={num === 1}
          onClick={() => setNum(num - 1)}>
          Previous
        </button>

        <h3 className="numbers">{num}</h3>

        <button className="pagbtn" onClick={() => setNum(num + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};
export default Employee;
