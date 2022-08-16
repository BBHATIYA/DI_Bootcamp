import robots from "../robots";

const initialState = {
  robots: robots,
  robotsToShow: {},
};

export const reducer = (state = initialState, action = {}) => {
  let newRobots = [];

  if (action.payload) {
    const stringToSearchInName = action.payload.toLowerCase();
    newRobots = state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(stringToSearchInName)
    );
    console.log(newRobots);
  }

  if (action.payload === "") {
    return { ...initialState };
  }

  switch (action.type) {
    case "SEARCH":
      return { ...state, robots: newRobots };
    default:
      return { ...state };
  }
};
