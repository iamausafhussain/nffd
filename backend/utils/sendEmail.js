// const nodemailer = require("nodemailer");

// const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     // host: "127.0.0.1",
//     port: 1025,
//     secure: true,
//     auth: {
//       user: process.env.SMPT_MAIL,
//       pass: process.env.SMPT_PASSWORD,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   const mailOptions = {
//     from: process.env.SMPT_MAIL,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   await transporter.sendMail(mailOptions);
// };

// const ProtonMail = require("protonmail-api");
const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // console.log("options.email" + options.email);
  // console.log("options.message" + options.message);
  // console.log("options.subject" + options.subject);

  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8684759a5afbcd",
      pass: "8c5640919bc94a",
    },
  });

  var mailOptions = {
    from: "8684759a5afbcd",
    to: options.mail,
    subject: options.subject,
    text: options.message,
  };
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent!! %s", info.messageId);
  });
};

module.exports = sendEmail;
