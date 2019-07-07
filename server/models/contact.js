const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model(
  'Contact',
  new Schema({
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    link: {
      type: Number,
      required: true
    }
  })
)
