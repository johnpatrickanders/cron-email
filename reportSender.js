const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');
const defaultMailingList = process.env.DEFAULT_MAILING_LIST;
const senderEmail = process.env.SENDER_EMAIL;
const senderPassword = process.env.GMAIL_CODE; // gmail app password
console.log(senderEmail, senderPassword, defaultMailingList)
module.exports = {
  sendMail: async (subject, text, to = defaultMailingList) => {
    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: senderEmail,
          pass: senderPassword,
        },
      });

      const message = {
        from: `report sender <${senderEmail}>`,
        to,
        subject,
        text: subject,
        html: text,
      };

      transporter.sendMail(message, () => { });
    } catch (e) {
      // handle errors here
    }
  },
};
