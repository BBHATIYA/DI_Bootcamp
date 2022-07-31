// https://jsonplaceholder.typicode.com/users

const axios = require("axios").default;

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     console.log(response.data);
//   });
const getUsers = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data
  } catch (e) {
    console.log(e);
  }
};



module.exports = {
  getUsers
};
