const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model(
  'Skill',
  new Schema(
    {
      parentId: {
        type: String,
        required: false
      },
      type: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      percent: {
        type: Number,
        required: true
      },
      enable: {
        type: Boolean,
        required: true
      },
      enableMobile: {
        type: Boolean,
        required: true
      },
      children: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Skill'
        }
      ]
    },
    { timestamp: true }
  )
)
