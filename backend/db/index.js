const MYSQL = require('mysql');

const connection = MYSQL.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '',
  database: 'Books'
})

connection.connect((err)=> {
  if (err) {
    throw new Error(err)
    console.log(err);
  } else {
    console.log('Successfully connected to the database');
  }
})

module.exports = connection;