const largeNumber = 356;
const currentDate = () => {
  let todayDate = new Date();
  console.log(todayDate);
  return todayDate;
};

module.exports = { largeNumber, currentDate };
