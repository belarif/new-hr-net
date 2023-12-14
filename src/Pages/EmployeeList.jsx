import React from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  return (
    <React.Fragment>
      <div id="employee-div" class="container">
        <h1>Current Employees</h1>
        <table id="employee-table" class="display"></table>
        <Link to="/home">Home</Link>
      </div>
    </React.Fragment>
  );
};

export default EmployeeList;
