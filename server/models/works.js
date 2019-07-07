const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model(
  'Works',
  new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    thumb: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    sourceLink: {
      type: String,
      required: true
    },
    workLink: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    tools: {
      type: Array,
      required: true
    },
    enable: {
      type: Boolean,
      required: true
    },
    enableMobile: {
      type: Boolean,
      required: true
    }
  })
)
