import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: null,
  lastName: null,
  dateOfBirth: null,
  startDate: null,
  street: null,
  city: null,
  state: null,
  zipCode: null,
  department: null,
};

const { actions, reducer } = createSlice({
  name: "employee",
  initialState,
  reducers: {
    submitting: {
      prepare: (employeeData) => ({
        payload: employeeData,
      }),
      reducer: (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.dateOfBirth = action.payload.dateOfBirth;
        state.startDate = action.payload.startDate;
        state.street = action.payload.street;
        state.state = action.payload.state;
        state.city = action.payload.city;
        state.zipCode = action.payload.zipCode;
        state.department = action.payload.department;
      },
    },
  },
});

export function createEmployee(employeeData) {
  return async (dispatch) => {
    if (employeeData) {
      dispatch(actions.submitting(employeeData));
    }
  };
}

export default reducer;
