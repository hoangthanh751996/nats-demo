const nats = require("./nats");

const sendEmail = (msg) => {
    nats.publish("send-email", msg, function() {
        console.log('Published ',msg);
    });
};
module.exports = {
    sendEmail
};
