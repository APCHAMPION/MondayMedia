const mongoose = require('mongoose');

// Define the schema
const querySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  mobile: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Please fill a valid mobile number']
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

// Create the model
const Query = mongoose.model('Query', querySchema);

module.exports = Query;
