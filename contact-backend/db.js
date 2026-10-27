// db.js
const mysql = require('mysql2');
// create a connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // your MySQL user
  password: 'Abeni777#',      // your MySQL password
  database: 'portfolioDb'  // your database name
});

// connect to MySQL
db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = db;