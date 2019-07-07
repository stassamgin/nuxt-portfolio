const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model(
  'User',
  new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    patronymicName: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    specialty: {
      type: String,
      required: true
    },
    birth: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    contacts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Contact'
      }
    ]
  })
)
