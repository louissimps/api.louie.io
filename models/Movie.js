const mongoose = require('mongoose');
const MovieSchema = new mongoose.Schema({  
  _id: String,
  title: String,
  plot: String
});
module.exports = mongoose.model('Movie', MovieSchema);