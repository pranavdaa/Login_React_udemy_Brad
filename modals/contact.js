const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },

  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: "personal"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("contact", ContactSchema);
