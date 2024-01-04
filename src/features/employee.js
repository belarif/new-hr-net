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
      state.dateOfBirth =
        action.payload.dateOfBirth.$d.getDate() +
        "-" +
        action.payload.dateOfBirth.$d.getMonth() +
        1 +
        "-" +
        action.payload.dateOfBirth.$d.getFullYear();
      state.startDate =
        action.payload.startDate.$d.getDate() +
        "-" +
        action.payload.startDate.$d.getMonth() +
        1 +
        "-" +
        action.payload.startDate.$d.getFullYear();
      state.street = action.payload.street;
      state.state = action.payload.state;
      state.city = action.payload.city;
      state.zipCode = action.payload.zipCode;
      state.department = action.payload.department;
    },
  },
});

export function createEmployee(formData) {
  return async (dispatch) => {
    if (formData) {
      dispatch(submitting(formData));
      dispatch(addEmployee(formData));
    }
  };
}

export const { submitting } = employeeSlice.actions;
export default employeeSlice.reducer;
