const express = require("express");
const next = require("next");
const sendEmail = require("./src/app/utils/emailService"); // Path ke emailService Anda
const cors = require("cors");
require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";  // Cek apakah dalam mode development
const app = next({ dev });
const handle = app.getRequestHandler();  // Fungsi untuk menangani request Next.js

app.prepare().then(() => {
  const server = express();
  const PORT = 3001;

  // Middleware
  server.use(express.json());
  server.use(cors()); // Agar API dapat diakses oleh frontend

  // Endpoint untuk mengirim email
  server.post("/send-email", async (req, res) => {
    const { name, email } = req.body;

    try {
      const html = `
        <h1>Hi, ${name}</h1>
        <p>Permintaan sistem yang Anda perlukan sudah masuk pada sistem kami, harap menunggu tim Develoop menghubungi Anda!</p>
      `;
    
      // Kirim email
      await sendEmail(email, "PEMBERITAHUAN SISTEM DEVELOOP", html);

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  });

  // Semua request ke server Express yang bukan API akan diteruskan ke Next.js
  server.all("*", (req, res) => {
    return handle(req, res);  // Menangani request untuk rendering halaman Next.js
  });

  // Jalankan server Express di port yang diinginkan
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Server running on http://localhost:${PORT}`);
  });
});
