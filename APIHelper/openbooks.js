const request = require('express');
const axios = require('axios');

let openbookURL = 'https://openlibrary.org/isbn/';

const makeAPICall = (isbn, callback) => {

  let bookurl = `https://openlibrary.org/isbn/${isbn}.json`;

  axios
    .get(url)
    .catch(err => {
      console.log(err);
    })
    .then(() => {
      callback();
    })
    .then(console.log('complete'));

}

module.exports.makeAPICall = makeAPICall;