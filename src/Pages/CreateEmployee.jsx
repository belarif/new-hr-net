import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  ConfigProvider,
} from "antd";
import { standardizeDataStatesSelectField } from "../mappers/statesData";
import { useState, useEffect } from "react";

const CreateEmployee = () => {
  const [selectStates, setSelectStates] = useState([]);

  useEffect(() => {
    setSelectStates(standardizeDataStatesSelectField);
  }, []);

  if (!selectStates) {
    return <div></div>;
  }

  return (
    <React.Fragment>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form
          layout="vertical"
          style={{ width: "40%", background: "#f5f6f7", padding: "30px" }}
        >
          <Form.Item label="First name">
            <Input />
          </Form.Item>
          <Form.Item label="Last name">
            <Input />
          </Form.Item>
          <Form.Item label="Date of birth">
            <DatePicker format="DD/MM/YYYY" />
          </Form.Item>
          <Form.Item label="Start date">
            <DatePicker format="DD/MM/YYYY" />
          </Form.Item>
          <fieldset>
            <legend style={{ borderBottom: "0", width: "auto" }}>
              Address
            </legend>
            <Form.Item label="Street">
              <Input />
            </Form.Item>
            <Form.Item label="City">
              <Input />
            </Form.Item>
            <Form.Item label="State">
              <ConfigProvider
                theme={{
                  token: {
                    colorBgContainer: "#e6ebf0",
                  },
                }}
              >
                <Select
                  defaultValue={selectStates[0] && selectStates[0].label}
                  options={selectStates && selectStates}
                />
              </ConfigProvider>
            </Form.Item>
            <Form.Item label="Zip Code">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Department">
              <ConfigProvider
                theme={{
                  token: {
                    colorBgContainer: "#e6ebf0",
                  },
                }}
              >
                <Select defaultValue="Sales">
                  <Select.Option value="sales">Sales</Select.Option>
                  <Select.Option value="marketing">Marketing</Select.Option>
                  <Select.Option value="engineering">Engineering</Select.Option>
                  <Select.Option value="human Resources">
                    Human Resources
                  </Select.Option>
                  <Select.Option value="legal">Legal</Select.Option>
                </Select>
              </ConfigProvider>
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <ConfigProvider
                theme={{
                  token: {
                    colorBgContainer: "#e6ebf0",
                  },
                }}
              >
                <Button>Save</Button>
              </ConfigProvider>
            </Form.Item>
          </fieldset>
        </Form>

        {/* <button onclick="saveEmployee()">Save</button> */}
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </React.Fragment>
  );
};

export default CreateEmployee;
