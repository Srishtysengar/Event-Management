const Event = require("../models/event.models");

async function createEvent(req, res) {
  console.log(req.body);
  try {
    const { title, description, date, time, venue,attendees } = req.body;

    const isValidDate = !isNaN(Date.parse(date));
    if (!isValidDate) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    const isValidTime = /^([01]\d|2[0-3]):([0-5]\d)$/.test(time);
    if (!isValidTime) {
      return res.status(400).json({ error: "Invalid time format" });
    }

    const eventDate = new Date(date + " " + time);
    const currentDate = new Date();
    if (eventDate <= currentDate) {
      return res
        .status(400)
        .json({ error: "Event date should be in the future" });
    }

    const event = new Event({
      title,
      description,
      date,
      time,
      venue,
      attendees,
    });

    // Save the event to the database
    await event.save();

    // Respond with success
    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getEvent(req, res) {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteEvent(req, res) {
  const { eventId } = req.params;

  try {
    await Event.findByIdAndDelete(eventId);
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createEvent,
  getEvent,
  deleteEvent,
};
