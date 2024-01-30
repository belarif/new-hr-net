import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table, Input, Select, Form } from "antd";
import { selectEmployeesData } from "../selectors/selectors";

const EmployeeList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchSelect, setSearchSelect] = useState(10);
  const employeesData = useSelector(selectEmployeesData);
  let employeesList = employeesData["employees"];

  const columnsTable = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
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
      key: "lastName",
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
      key: "startDate",
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
      key: "department",
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
      key: "dateOfBirth",
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
      key: "street",
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
      key: "city",
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
      key: "state",
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
      key: "zipCode",
      sorter: (a, b) => a.zipCode - b.zipCode,
    },
  ];

  // content drop down list of number of employees to display on table
  const dropDownEmployeesNumber = [
    {
      key: 1,
      value: 10,
      label: 10,
    },
    {
      key: 2,
      value: 25,
      label: 25,
    },
    {
      key: 3,
      value: 50,
      label: 50,
    },
    {
      key: 4,
      value: 100,
      label: 100,
    },
  ];

  const filterEmployeeListToDisplay = () => {
    if (searchInput === "") {
      return employeesList;
    }

    employeesList = employeesList.filter((employee) => {
      const r = columnsTable.find((column) =>
        employee[column.dataIndex].includes(searchInput.toLowerCase())
      );

      return r ? r : false;
    });

    return employeesList;
  };

  const setNumberEmployeesToDisplay = (value) => {
    setSearchSelect(value);
  };

  return (
    <React.Fragment>
      <div id="employee-div" className="container">
        <h1 style={{ textAlign: "center" }}>Current Employees</h1>
        <div>
          <Form
            layout="horizontal"
            initialValues={{
              employeeNumber: dropDownEmployeesNumber[0].label,
            }}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Form.Item label="Show" name="employeeNumber">
              <Select
                options={dropDownEmployeesNumber}
                onChange={setNumberEmployeesToDisplay}
              ></Select>
            </Form.Item>
            <Form.Item label="Search">
              <Input.Search size="small" onSearch={setSearchInput} allowClear />
            </Form.Item>
          </Form>
        </div>
        {employeesList && (
          <Table
            columns={columnsTable}
            dataSource={filterEmployeeListToDisplay()}
            pagination={{
              pageSize: searchSelect,
            }}
          ></Table>
        )}
        <Link to="/home" style={{ textAlign: "center" }}>
          Home
        </Link>
      </div>
    </React.Fragment>
  );
};

export default EmployeeList;
