import { states } from "../data/states";

export const standardizeStatesData = () => {
  return states.map((state) => ({
    ...state,
    label: state.name,
    value: state.abbreviation,
  }));
};
