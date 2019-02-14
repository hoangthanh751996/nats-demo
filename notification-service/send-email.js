// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

module.exports = (to, data) => {
    const sgMail = require('@sendgrid/mail');
    const config = require("./config");
    sgMail.setApiKey(config["sendgrid"]["SENDGRID_API_KEY"]);
    const msg = {
        to,
        from: 'support@sellpro.vn',
        subject: 'Chào mừng bạn đã đến với khóa học Nats',
        text: `Xin chào ${data.name},
                Thông tin đăng nhập khóa học của bạn là: 
                   Email: ${data.email}
                   Password: ${data.password}
        `,
        html: `Xin chào ${data.name},<br>
                Thông tin đăng nhập khóa học của bạn là: <br>
                   Email: ${data.email}<br>
                   Password: ${data.password}<br><strong>Trân trọng: Sellpro.vn</strong>`,
    };
    sgMail.send(msg);
};
