const turf = require("@turf/turf");
const data = require("./dataset");

const targetPoint = turf.point([75.598, 16.9699]);

// (log, lat)

const points = turf.featureCollection(data);

console.time("nearBy");

const nearest = turf.nearestPoint(targetPoint, points);

console.timeEnd("nearBy");

console.log(nearest);
