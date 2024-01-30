import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  DatePicker,
  Select,
  ConfigProvider,
  Modal,
} from "antd";
import { standardizeStatesData } from "../mappers/data";
import { createEmployee } from "../features/employee";
import "../css/createEmployee.css";

const CreateEmployee = () => {
  const [selectStates, setSelectStates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectStates(standardizeStatesData);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (formData) => {
    const values = {
      ...formData,
      dateOfBirth: formData["dateOfBirth"].format("DD/MM/YYYY"),
      startDate: formData["startDate"].format("DD/MM/YYYY"),
      firstName: formData["firstName"].toLowerCase(),
      lastName: formData["lastName"].toLowerCase(),
      department: formData["department"].toLowerCase(),
      city: formData["city"].toLowerCase(),
      state: formData["state"].toLowerCase(),
      street: formData["street"].toLowerCase(),
    };

    dispatch(createEmployee(values, form));
    showModal();
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="content">
          <h1>HRnet</h1>
          <Link to="/employee-list">View Current Employees</Link>
          <h2>Create Employee</h2>
          <Form
            layout="vertical"
            style={{ width: "40%", background: "#f5f6f7", padding: "30px" }}
            onFinish={onFinish}
            form={form}
            initialValues={{
              state: "Alabama",
              department: "Sales",
            }}
          >
            <Form.Item
              label="First name"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Enter your first name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last name"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Enter your last name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Date of birth"
              name="dateOfBirth"
              rules={[
                {
                  required: true,
                  message: "Enter your date of birth",
                },
              ]}
            >
              <DatePicker format="DD/MM/YYYY" />
            </Form.Item>
            <Form.Item
              label="Start date"
              name="startDate"
              rules={[
                {
                  required: true,
                  message: "Enter your start date",
                },
              ]}
            >
              <DatePicker format="DD/MM/YYYY" />
            </Form.Item>
            <fieldset>
              <legend style={{ borderBottom: "0", width: "auto" }}>
                Address
              </legend>
              <Form.Item
                label="Street"
                name="street"
                rules={[
                  {
                    required: true,
                    message: "Enter the street",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="City"
                name="city"
                rules={[
                  {
                    required: true,
                    message: "Enter the city",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="State"
                name="state"
                rules={[
                  {
                    required: true,
                    message: "Enter the state",
                  },
                ]}
              >
                {selectStates && <Select options={selectStates} />}
              </Form.Item>
              <Form.Item
                label="Zip Code"
                name="zipCode"
                rules={[
                  {
                    required: true,
                    message: "Enter zip code",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Department"
                name="department"
                rules={[
                  {
                    required: true,
                    message: "Enter department",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="sales">Sales</Select.Option>
                  <Select.Option value="marketing">Marketing</Select.Option>
                  <Select.Option value="engineering">Engineering</Select.Option>
                  <Select.Option value="human Resources">
                    Human Resources
                  </Select.Option>
                  <Select.Option value="legal">Legal</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item style={{ textAlign: "center" }}>
                <ConfigProvider
                  theme={{
                    token: {
                      colorBgContainer: "#e6ebf0",
                    },
                  }}
                >
                  <Button htmlType="submit">Save</Button>
                </ConfigProvider>
              </Form.Item>
            </fieldset>
          </Form>
        </div>
      </div>
      <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
        <p>Employee Created!</p>
      </Modal>
    </React.Fragment>
  );
};

export default CreateEmployee;
