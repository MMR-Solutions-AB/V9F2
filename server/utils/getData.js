const fs = require("fs");

const getData = (path, format) => {
  const response = fs.readFileSync(path, format);
  const data = JSON.parse(response);
  return data;
};

module.exports = getData;
