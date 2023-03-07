import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../style/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.main}>
      <h3>Todo </h3>
      <NavLink
        exact
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
        to="/">
        Employee
      </NavLink>
      <NavLink
        to="/add"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}>
        Employee Add
      </NavLink>
    </div>
  );
};

export default Navbar;
