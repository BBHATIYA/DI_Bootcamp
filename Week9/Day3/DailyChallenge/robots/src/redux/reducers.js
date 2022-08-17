const initialState = {
  robots: [],
};

export const reducer = (state = initialState, action = {}) => {
  if (action.payload === "") {
    return { ...state };
  }

  switch (action.type) {
    case "SEARCH":
      const stringToSearchInName = action.payload.toLowerCase();
      const newRobots = state.robots.filter((robot) =>
        robot.name.toLowerCase().includes(stringToSearchInName)
      );
      return { ...state, robots: newRobots };

    case "GET-ROBOTS":
      return { ...state, robots: action.payload };

    default:
      return { ...state };
  }
};
