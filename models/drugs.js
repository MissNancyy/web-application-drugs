const mongoose = require('mongoose')

const drugsSchema = new mongoose.Schema({
  drugName: {
    type: String,
    required: true,
  },
  drugInteraction: {
    type: String,
    required: true,
  },
  drugPhysiology: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('drugs', drugsSchema)