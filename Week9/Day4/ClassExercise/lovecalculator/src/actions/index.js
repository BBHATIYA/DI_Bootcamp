export const setNames = (name, value) => {
  return {
    type: name,
    payload: value,
  };
};

export const findMatch = (sname, fname) => (dispatch) => {
  fetch(
    `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "9a665ac796msh8631d97f450a16fp178355jsn8c2c68c0e7c2",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.props.findAMatch(data);
    })
    .catch((err) => {
      console.error(err);
    });
};
