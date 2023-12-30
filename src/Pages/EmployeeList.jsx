import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";

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

  const data = [
    {
      firstName: "hocine",
      lastName: "belarif",
      startDate: "12/09/2023",
      department: "marketing",
      dateOfBirth: "12/09/1998",
      street: "rue de la paix",
      city: "hawaii",
      state: "HI",
      zipCode: 12023,
    },
    {
      firstName: "alex",
      lastName: "faucoult",
      startDate: "15/09/2013",
      department: "sales",
      dateOfBirth: "17/01/1976",
      street: "rue de la paroisse",
      city: "chicago",
      state: "CH",
      zipCode: 78023,
    },
  ];

  return (
    <React.Fragment>
      <div id="employee-div" class="container">
        <h1>Current Employees</h1>
        <Table columns={columns} dataSource={data}></Table>
        <Link to="/home">Home</Link>
      </div>
    </React.Fragment>
  );
};

export default EmployeeList;
