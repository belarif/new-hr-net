import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "antd";
import { selectEmployeesData } from "../selectors/selectors";

const EmployeeList = () => {
  const employeesData = useSelector(selectEmployeesData);
  const employeesList = employeesData["employees"];

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      sorter: (a, b) => {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      },
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      sorter: (a, b) => {
        if (a.lastName < b.lastName) {
          return -1;
        }
        if (a.lastName > b.lastName) {
          return 1;
        }
        return 0;
      },
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      sorter: (a, b) => {
        if (a.startDate < b.startDate) {
          return -1;
        }
        if (a.startDate > b.startDate) {
          return 1;
        }
        return 0;
      },
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => {
        if (a.department < b.department) {
          return -1;
        }
        if (a.department > b.department) {
          return 1;
        }
        return 0;
      },
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      sorter: (a, b) => {
        if (a.dateOfBirth < b.dateOfBirth) {
          return -1;
        }
        if (a.dateOfBirth > b.dateOfBirth) {
          return 1;
        }
        return 0;
      },
    },
    {
      title: "Street",
      dataIndex: "street",
      sorter: (a, b) => {
        if (a.street < b.street) {
          return -1;
        }
        if (a.street > b.street) {
          return 1;
        }
        return 0;
      },
    },
    {
      title: "City",
      dataIndex: "city",
      sorter: (a, b) => {
        if (a.city < b.city) {
          return -1;
        }
        if (a.city > b.city) {
          return 1;
        }
        return 0;
      },
    },
    {
      title: "State",
      dataIndex: "state",
      sorter: (a, b) => {
        if (a.state < b.state) {
          return -1;
        }
        if (a.state > b.state) {
          return 1;
        }
        return 0;
      },
    },
    {
      title: "Zip Code",
      dataIndex: "zipCode",
      sorter: (a, b) => a.zipCode - b.zipCode,
    },
  ];

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
