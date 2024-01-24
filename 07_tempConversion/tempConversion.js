const convertToCelsius = function(degrees) {
  return Math.round(((degrees - 32) * 10) * 5/9) / 10;
};

const convertToFahrenheit = function(degrees) {
  return Math.round(10 * (degrees * 9/5 + 32)) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
