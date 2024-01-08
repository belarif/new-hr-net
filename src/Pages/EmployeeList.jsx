import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table, Input, Form } from "antd";
import { selectEmployeesData } from "../selectors/selectors";

const EmployeeList = () => {
  const [SearchInput, setSearchInput] = useState("");
  const employeesData = useSelector(selectEmployeesData);
  let employeesList = employeesData["employees"];

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

  const filterData = () => {
    if (SearchInput === "") {
      return employeesList;
    }

    employeesList = employeesList.filter((employee) => {
      const r = columns.find((column) =>
        employee[column.dataIndex].includes(SearchInput)
      );

      return r ? r : false;
    });
    return employeesList;
  };

  return (
    <React.Fragment>
      <div id="employee-div" className="container">
        <h1 style={{ textAlign: "center" }}>Current Employees</h1>
        <div>
          <Form style={{ display: "flex", justifyContent: "end" }}>
            <Form.Item label="Search:">
              <Input.Search size="small" onSearch={setSearchInput} allowClear />
            </Form.Item>
          </Form>
        </div>
        {employeesList && (
          <Table columns={columns} dataSource={filterData()}></Table>
        )}
        <Link to="/home" style={{ textAlign: "center" }}>
          Home
        </Link>
      </div>
    </React.Fragment>
  );
};

export default EmployeeList;
