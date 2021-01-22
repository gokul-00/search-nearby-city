const Geo = require("geo-nearby");
const data = require("./dataset");

// const data = [
//   [-35.30278, 149.14167, "Canberra"],
//   [-33.86944, 151.20833, "Sydney"],
//   [-37.82056, 144.96139, "Melbourne"],
//   [-34.93333, 138.58333, "Adelaide"],
//   [-27.46778, 153.02778, "Brisbane"],
//   [-31.95306, 115.85889, "Perth"],
// ];

const dataSet = Geo.createCompactSet(data);
const geo = new Geo(dataSet, { sorted: true });

console.time("nearBy");

// "lat": 18.9667,
// "lng": 72.8333

console.log(geo.nearBy(72.8333, 18.9667, 50000));

console.timeEnd("nearBy");
