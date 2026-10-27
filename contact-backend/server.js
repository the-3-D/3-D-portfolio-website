
// server.js
//okay let me start development with granting my self that there is no any problem with writing code 
//my fellow can do it ,generate it .... 
//so what is my role in this program 
const express = require('express');
//what is express means here?
//expess is a web application framework for Node.js, designed to build web applications and APIs. It provides a robust set of features for web and mobile applications, making it easier to handle routing, middleware, and server-side logic. In this code, we use Express to create a server that can handle HTTP requests and serve static files from the frontend.
const cors = require('cors');
//what is cos means here?
//cors stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than 
// the one that served the web page. In this code, we use the cors middleware to enable CORS, allowing our frontend (which may be served from a different origin) to communicate with our backend API without being blocked by the browser's same-origin policy.
const db = require('./db');
//this  may be reutrn the db from the db.js file which is responsible for connecting to the database and exporting the connection object that we can use to perform database operations in our server code.
// ===== Nodemailer added here =====
const nodemailer = require("nodemailer");
// ================================
//what are we doing here ?
//we are importing the nodemailer library, which is a module for Node.js that allows us to send emails easily. In this code, we will use nodemailer to send an email notification whenever a new contact message is received through our API. This way, we can be alerted in real-time when someone submits the contact form on our portfolio website.
const app = express();
//okay that means we are saying to the computer hey  took the express model and 

app.use(cors());
app.use(express.json()); // parse JSON requests
//what is going on here ?
//we are adding middleware to our Express app. The cors() middleware enables Cross-Origin Resource Sharing, allowing our frontend to make requests to our backend API from a different origin. The express.json() middleware parses incoming JSON request bodies, making it easier for us to access the data sent from the frontend in our route handlers.
//THEN we are saying to the computer hey  took the express model and create an instance of it and store it in the variable app. This app variable will be used to define our routes and middleware for handling HTTP requests and responses in our server.
//then we are configurin the frontendbytolera-main/frontendbytolera-main as static files to be served by the express server and then we are saying to the computer hey  when you receive a request to the root URL ("/"), send the Contact.html file from the frontend directory as the response. This allows us to serve our contact page when users visit our website.
app.use(express.static('../frontendbytolera-main/frontendbytolera-main')); // serve static files from frontend
//okay here we are taking the instance and then  passing parameters to it then what is res.sendFile 
//res.sendFile is a method in Express that sends a file as the response to the client. In this case, when a user visits the root URL ("/"), we use res.sendFile to send the Contact.html file located in the frontend directory. This allows us to serve our contact page to users when they access our website.
// Serve the contact page as root
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../frontendbytolera-main/frontendbytolera-main/Contact.html');
});
// ===== Nodemailer transporter configuration =====
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abenithegrace@gmail.com",        // <-- replace with your Gmail
    pass: "kmqokmipcqeolzyg"            // <-- replace with Gmail App Password
  }
}
);
// ================================================


// POST API to store contact message
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Log the received data
  console.log("Received data from frontend:", req.body);

  const sql = `INSERT INTO contacts (full_name, email, message) VALUES (?, ?, ?)`;

  db.query(sql, [name, email, message], async (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    // ===== Email sending added here =====
    const mailOptions = {
      from: email, // sender (user email)
      to: "abenithegrace@gmail.com", // your email where messages arrive
      subject: "New Portfolio Contact Message",
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Email sending failed:", error);
    }
    // ====================================

    res.json({ message: "Contact saved successfully", id: result.insertId });
  });
});


// start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});