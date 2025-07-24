import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  description: { type: String },
  userId: { type: String, required: true },
});

export default mongoose.model('Event', eventSchema);