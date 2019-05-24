const mongoose = require('mongoose');
const TheaterSchema = new mongoose.Schema({  
  _id: String,
  theaterId: String,
  location: {}
});
module.exports = mongoose.model('Theater', TheaterSchema);