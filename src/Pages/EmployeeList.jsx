import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "antd";
import { selectEmployeesData } from "../selectors/selectors";

const EmployeeList = () => {
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      sorter: {
        compare: (a, b) => a.startDate - b.startDate,
      },
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      sorter: {
        compare: (a, b) => a.dateOfBirth - b.dateOfBirth,
      },
    },
    {
      title: "Street",
      dataIndex: "street",
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "State",
      dataIndex: "state",
    },
    {
      title: "Zip Code",
      dataIndex: "zipCode",
      sorter: {
        compare: (a, b) => a.zipCode - b.zipCode,
      },
    },
  ];

  const employeesData = useSelector(selectEmployeesData);
  const employeesList = employeesData["employees"];

  return (
    <React.Fragment>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        {employeesList && (
          <Table columns={columns} dataSource={employeesList}></Table>
        )}
        <Link to="/home">Home</Link>
      </div>
    </React.Fragment>
  );
};

export default EmployeeList;
