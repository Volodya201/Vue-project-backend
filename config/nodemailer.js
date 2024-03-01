const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "yt.volodyago@gmail.com",
      pass: "iiyk vcar ozrl ifvm",
    },
})

module.exports = transporter