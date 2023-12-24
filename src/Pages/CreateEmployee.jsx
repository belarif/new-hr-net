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

const CreateEmployee = () => {
  return (
    <React.Fragment>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>

        {/* <form action="#" id="create-employee">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label for="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" />

          <label for="start-date">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset className="address">
            <legend>Address</legend>

            <label for="street">Street</label>
            <input id="street" type="text" />

            <label for="city">City</label>
            <input id="city" type="text" />

            <label for="state">State</label>
            <select name="state" id="state"></select>

            <label for="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label for="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form> */}

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
                <Select />
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
                  <Select.Option>Sales</Select.Option>
                  <Select.Option>Marketing</Select.Option>
                  <Select.Option>Engineering</Select.Option>
                  <Select.Option>Human Resources</Select.Option>
                  <Select.Option>Legal</Select.Option>
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
