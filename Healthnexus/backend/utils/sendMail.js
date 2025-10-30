const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",  // or use SMTP config of your mail provider
  auth: {
    user: "hritik@gmail.com",   // replace with your email
    pass: "Sir Add Your One"      // use Application Password
  }
});

async function sendMail(to, subject, text) {
  try {
    await transporter.sendMail({
      from: '"Hospital App" hrivish2468@gmail.com',
      to,
      subject,
      text
    });
    console.log("✅ Email sent to", to);
  } catch (error) {
    console.error("❌ Email Error:", error);
  }
}

module.exports = sendMail;
