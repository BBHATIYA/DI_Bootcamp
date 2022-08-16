export const search = (stringToSearchFor) => {
  console.log(stringToSearchFor);

  return {
    type: "SEARCH",
    payload: stringToSearchFor,
  };
};
