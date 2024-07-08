const nodemailer = require('nodemailer');
const colors = require('colors');

/**
 * Send the email to the user
 * @param {String} status Message to send
 */
async function sendDelayedEmail(train, status) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.SMTP_USERNAME,
    to: process.env.USER_EMAIL,
    subject: "Your Train has been Delayed - Email Bot",
    text: `Hello ${process.env.USERNAME} Your train has been ${status}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(`Error Sending Email: ${error}`.red);
    } else {
      console.error(`Email Sent`.green);
    }
  });
}

module.exports = { sendDelayedEmail };
