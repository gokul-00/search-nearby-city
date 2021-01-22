const data = require("./csvjson.json");
const turf = require("@turf/turf");

const data_set = data.map((item) =>
  turf.point([item.lng, item.lat], { city: item.city })
);

console.log(data_set.length);

module.exports = data_set;
