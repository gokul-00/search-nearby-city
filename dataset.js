const data = require("./csvjson.json");

const data_set = data.map((item) => [item.lng, item.lat, item.city]);

console.log(data_set.length);

module.exports = data_set;
