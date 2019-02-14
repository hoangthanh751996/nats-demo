const NATS  = require("nats");
const nats = NATS.connect("nats://localhost:4222");
nats.on("error", function (e) {
    console.log("Error ", e);
    process.exit();
});

nats.on("close", function () {
    console.log("Nats broker is closed");
    process.exit();
});

console.log("Connect to Nats broker successfully!");

module.exports = nats;
