import express, { text } from "express";
import cors from "cors";
import nodemailer from "nodemailer";
const app = express();

app.use(cors());
// Enable express to parse incoming JSON data
app.use(express.json());

app.post("/api/details", (req, res) => {
  const { fullName, contact, email, message } = req.body;

  console.log({ fullName, contact, email, message });

  const sendmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "olusegunstephen222@gmail.com",
      pass: "nrjm mqkj iejs fyfm",
    },
  });

  const mail = {
    from: "olusegunstephen222@gmail.com",
    to: email,
    subject: message,
    html:
      fullName + "<h1>THANK YOU FOR CONTACTING ME</h1><p>That was easy!</p>",
  };

  sendmail.sendMail(mail, function (error) {
    if (error) {
      console.log("ERROR SENDING MAIL");
    } else {
      res.status(200).json({ message: "Form data received successfully!" });
      console.log("MAIL SENT SUCCESSFULLY");
    }
  });
});

app.listen(8080, () => console.log("Server running on port 8080"));
