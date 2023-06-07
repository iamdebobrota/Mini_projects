import React from "react";
import {Routes,Route} from 'react-router-dom';
import AddEmployee from "../pages/AddEmployee";
import Details from "../pages/Details";
import EditEmploye from "../pages/EditEmploye";
import Employee from "../pages/Employee";
import Navbar from "./Navbar";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmploye />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
