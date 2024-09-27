import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: girlshostel9069@gmail.com,
    pass: LetsAct00,
  },
});

export const sendMail = async (to: string, subject: string, text: string) => {
  console.log(process.env.GMAIL_ACCOUNT);
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    html: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
