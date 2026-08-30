
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '30062005@17@Aa',
  database: 'sethu'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.post('/submit', (req, res) => {
  const { name, email, phone, message } = req.body;
  const sql = 'INSERT INTO users (name, email, phone, message) VALUES (?, ?, ?, ?)';
  connection.query(sql, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error('Error inserting data into database:', err);
      res.status(500).send('Internal server error');
      return;
    }
    console.log('Data inserted into database');
    res.send('Form submitted successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
