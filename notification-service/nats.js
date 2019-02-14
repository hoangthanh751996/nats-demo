const NATS  = require("nats");
const nats = NATS.connect("nats://localhost:4222");
console.log("Connect Nats success");
// Simple Subscriber
nats.subscribe('send-email', {queue: "notification"}, function(msg) {
    const sendEmail = require("./send-email");
    const data= JSON.parse(msg);
    sendEmail(data.email, data);
    console.log('Received a message: ' + msg);
});


