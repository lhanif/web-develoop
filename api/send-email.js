import sendEmail from "../../src/app/utils/emailService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    try {
      const html = `
        <h1>Hi, ${name}</h1>
        <p>Permintaan sistem yang Anda perlukan sudah masuk pada sistem kami, harap menunggu tim Develoop menghubungi Anda!</p>
      `;
      await sendEmail(email, "PEMBERITAHUAN SISTEM DEVELOOP", html);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
