import { states } from "../data/states";

export const standardizeDataStatesSelectField = () => {
  return states.map((state) => ({
    ...state,
    label: state.name,
    value: state.abbreviation,
  }));
};
