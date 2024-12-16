const convertToCelsius = function(tempf) {
  let tempc = (tempf - 32) * 0.55555;
  return Math.round(tempc * 10) / 10;
};

const convertToFahrenheit = function(tempc) {
  let tempf = tempc * 1.8 +32;
  return Math.round(tempf * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
