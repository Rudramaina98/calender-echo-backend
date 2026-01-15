import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getEvents = async (req, res) => {
  try {
    const { userId } = req.params;
    const events = await Event.find({ userId });
    res.json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export const getAllEvents = async (req, res) => {
//   try {
//     const events = await Event.find().sort({ start: 1 });
//     res.status(200).json(events);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch events', details: error.message });
//   }
// };

// export const getAllEvents = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const events = await Event.find({ userId });
//     res.status(200).json(events);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch events', details: error.message });
//   }
// };

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.json({ message: 'Event deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};