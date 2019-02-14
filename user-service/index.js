const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const uuid = require("uuid");
const userPrivate = require("./user.private");

// boostrap app
const app = express();
const server = require("http").Server(app);
app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get("/users", (req, res) => {
    return res.json({ok: true});
});

app.post("/users", (req, res) => {
    try {
        const payload = req.body;
        if (!payload.email) throw new Error("Yêu cầu trường email");
        if (!payload.name) throw new Error("Yêu cầu trường name");
        if (!payload.password) throw new Error("Yêu cầu trường password");
        // if (index >= 0) throw new Error("Email đã tồn tại");
        let user = {
            ...payload,
            id: uuid(),
            created_time: new Date(),
            updated_time: new Date()
        };
        userPrivate.sendEmail(JSON.stringify(user));
        return res.json(user);
    } catch (e) {
        return res.json({error: e.message});
    }

});

server.listen(8080, function (err) {
    if (err) console.log("err", err);
    console.log("Server listen port", 8080)
});
