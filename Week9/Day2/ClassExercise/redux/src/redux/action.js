export const handelChangeAction = (value) => {
  return {
    type: "CHANGE_PROP_ONE",
    payload: value,
  };
};

export const handelClickAction = () => {
  return {
    type: "CHANGE_PROP_TWO",
  };
};

export const changeOne = (value) => {
  return {
    type: "ONE",
    payload: value,
  };
};
