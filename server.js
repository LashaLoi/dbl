const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const port = 8080;

dotenv.config();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static("build"))
  .use(cors())
  .post("/api/send", ({ body: { name, email, phone, message } }, res) => {
    const { EMAIL_FROM, PASSWORD_FROM, EMAIL_TO } = process.env;

    nodemailer
      .createTransport({
        service: "gmail",
        auth: {
          user: EMAIL_FROM,
          pass: PASSWORD_FROM
        }
      })
      .sendMail({
        from: `${name} <email@gmail.com>`,
        to: EMAIL_TO,
        subject: "DBL",
        html: `
            <h2>Вам пришло сообщение с сайта DBL</h2>
            <ul>
                <li>Email отправителя: ${email}</li>
                <li>Телефон: ${phone}</li>                
                <li>Сообщение: ${message}</li>                
            </ul>`
      })
      .then(() => res.json({ ok: true }))
      .catch(() => res.json({ ok: false }));
  })
  .get("/:route*", (req, res, next) =>
    res.sendFile(path.join(__dirname, "./build", "index.html"))
  )
  .listen(port, () =>
    console.log(`Server was started on http://localhost:${port}`)
  );
