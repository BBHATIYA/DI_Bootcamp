export const onchange = (text, type) => {
  return {
    type: type,
    payload: text,
  };
};
export const makeList = (obj) => {
  return {
    type: "LIST",
    payload: obj,
  };
};
export const handledelete = (i) => {
  return {
    type: "DELETE",
    payload: i,
  };
};
export const handleedit = (i) => {
  return {
    type: "EDIT",
    payload: i,
  };
};
