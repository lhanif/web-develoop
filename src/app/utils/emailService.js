
require("dotenv").config();  // Pastikan .env dibaca

const nodemailer = require("nodemailer");

// Konfigurasi Transporter
const transporter = nodemailer.createTransport({
  //   service: "gmail", // Anda bisa mengganti dengan layanan lain seperti Outlook atau custom SMTP.
  host: "smtp.gmail.com",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL_USER, // Email Anda
    pass: process.env.EMAIL_PASS, // Password aplikasi Anda
  },
});

// function sendMail(to,sub,msg){
//     transporter.sendMail({
//         to:to,
//         subject:sub,
//         html:msg
//     })
// }

// sendMail("develoop.office@gmail.com","SUBJECT","Cobayabang2")
// Fungsi Kirim Email
const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      //   from: 'lhanif467@gmail.com', // Nama dan email pengirim
      to, // Penerima email
      subject, // Subjek email
      html, // Pesan dalam format HTML
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

module.exports = sendEmail;
