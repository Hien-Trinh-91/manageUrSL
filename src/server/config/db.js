var mongoose = require('mongoose');

// Define our beer schema
var todaywork   = new mongoose.Schema({
  id: Number,
  work: String
});

// Export the Mongoose model
module.exports = mongoose.model('todaywork', todaywork);