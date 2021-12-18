const express = require('express');
const axios = require('axios');
const path = require('path');
const db = require('../db')
const {makeAPICall} = require('../../APIHelper/openbooks.js');

const PORT = 3000;

const app = express();
const openBookURL = 'https://openlibrary.org/isbn/';

app.use('/', express.static('frontend/dist'))
app.use(express.json());


app.post('/apiBooks', (req, res) => {

  const {ISBN} = req.body;
  let bookurl = `https://openlibrary.org/isbn/${ISBN}.json`;

  axios
    .get(bookurl)
    .then(({data}) => {
      db.query('INSERT INTO BookList (name, publisher) VALUES(?, ?)',
      [data.title, data.publishers[0]],
      ((err) => {
        if (err) {
          throw new Error (err);
          res.send(err);

        }
        res.send('Successfully added ' + data.title + ' to the book DB');
      })
      )
    })
    .then(console.log('successful'))
})

app.get('/apiBooks', (req, res) => {
  db.query('SELECT * from BookList', (err, data) => {
    if (err) {
      throw new Error (err);
      console.log(err);
      res.send(err);
    }
    console.log('GET REQUEST SUCCESSFUL');
    res.send(data);
  })
})

app.listen(PORT, () => {
  console.log(`I'm listening on port: ${PORT}`);
})