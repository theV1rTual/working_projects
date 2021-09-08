const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
    auth: {
      user: "cubemfp@gmail.com",
      pass: "Cubeerp_2020",
    },
  });
/*const contactEmail = nodemailer.createTransport({
	host: "manex-com.mail.protection.outlook.com",
	port: 25,
	requireTLS: true,
	logger: true,
	debug: true,
  });*/
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });


  router.post("/api/contact", (req, res) => {
    const name = req.body.name;
    const title = req.body.title;
    const company = req.body.company;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const phone = req.body.phone;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message; 
    const mail = {
      from: name,
	  // to: "aamanzhol@manex.com",
      to: ["cyun@manex.com", "hyun@manex.com", "jbarlow@manex.com", "yaliakbar@manex.com"],
      subject: company,
      html: `<p>Name: ${name}</p>
             <p>Title: ${title}</p>
             <p>Company: ${company}</p>
             <p>City: ${city}</p>
             <p>State/Province: ${state}</p>
             <p>Country: ${country}</p>
             <p>Phone Number: ${phone}</p>
             <p>Email: ${email}</p>
             <p>Subject: ${subject}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });
