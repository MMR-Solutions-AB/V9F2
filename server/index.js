const getData = require("./utils/getData");
const getLastIndex = require("./utils/getLastIndex");

const PATH = "./data/db.json";
const FORMAT = "utf-8";

const data = getData(PATH, FORMAT);

console.log(getLastIndex(data));
