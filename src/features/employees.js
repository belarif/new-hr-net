import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export function addEmployeeToEmployees(employee) {
  return async (dispatch) => {
    if (employee) {
      dispatch(addEmployee(employee));
    }
  };
}

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
