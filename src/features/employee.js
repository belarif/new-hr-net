import { createSlice } from "@reduxjs/toolkit";
import { addEmployee } from "./employees";

const initialState = {
  employeeData: {
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    startDate: null,
    street: null,
    city: null,
    state: null,
    zipCode: null,
    department: null,
  },
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    submitting: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.dateOfBirth = action.payload.dateOfBirth.$d;
      state.startDate = action.payload.startDate.$d;
      state.street = action.payload.street;
      state.state = action.payload.state;
      state.city = action.payload.city;
      state.zipCode = action.payload.zipCode;
      state.department = action.payload.department;
    },
  },
});

/**
 *
 * @param {Object} values - The employee to create
 * @param {Object} form
 */
export function createEmployee(values, form) {
  return async (dispatch) => {
    if (values) {
      dispatch(submitting(values));
      dispatch(addEmployee(values));
      form.resetFields();
    }
  };
}

export const { submitting } = employeeSlice.actions;
export default employeeSlice.reducer;
