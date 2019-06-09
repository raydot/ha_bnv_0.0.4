var mongoose = require('mongoose')

// JIC
var schemaOptions = {}

// Not going to do error checking on the models.  Between the frontend and the route validators it should be enough.
const userInfoSchema = new mongoose.Schema({
  _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  email: { type: String },
  busName: { type: String },
  phone: { type: String },
  address: {
    street1: { type: String },
    street2: { type: String },
    state: {
      type: String,
      uppercase: true
    },
    zip: Number
  }
}, { schemaOptions, collection: 'userInfo' })

module.exports = mongoose.model('userInfo', userInfoSchema)
