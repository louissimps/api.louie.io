const db = require('./db');
const Movie = require('./models/Movie');
const Theater = require('./models/Theater');

require('dotenv').config({ path: './variables.env' });

module.exports.movies = async (event) => {

  return await db.connectToDatabase()
    .then(() =>
      Movie.find()
      .limit(100)
    )
    .then(movies => {
      console.log(movies)
      return {
        statusCode: 200,
        body: JSON.stringify(movies)
      }
    })
    .catch(err => {
      return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Could not fetch the movies.'};
      });

};


module.exports.theaters = async (event) => {

  return await db.connectToDatabase()
    .then(() =>
      Theater.find()
      .limit(100)
    )
    .then(theaters => {
      return {
        statusCode: 200,
        body: JSON.stringify(theaters)
      }
    })
    .catch(err => {
      return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Could not fetch the theaters.'};
      });

};

  
