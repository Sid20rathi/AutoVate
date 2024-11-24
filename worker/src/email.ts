import nodemailer from "nodemailer";



const transport = nodemailer.createTransport({
    host: process.env.SMTP_ENDPOINT,
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

export async function sendEmail(to: string, body: string) {
    await transport.sendMail({
        from: "sid20rathi@gmail.com",
        sender: "sid20rathi@gmail.com",
        to,
        subject: "Hello from AutoVate",
        text: body
    })
}
