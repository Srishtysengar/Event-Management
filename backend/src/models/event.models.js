const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  attendees: {
    type: String,
    required: true,
  }

});

const Event = mongoose.model("Events", eventSchema);

module.exports = Event;
