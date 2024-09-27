import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "girlshostel9069@gmail.com",
    pass: "zgtg bnki uedp ommv",
  },
});

export const sendMail = async (to: string, subject: string, text: string) => {
  console.log(process.env.GMAIL_ACCOUNT);
  const mailOptions = {
    from: "girlshostel9069@gmail.com",
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
