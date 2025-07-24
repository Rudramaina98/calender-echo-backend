import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import eventRoutes from './routes/eventRoutes.js';
// import { trainClassifier } from './services/nlpService.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send("Backend running successfully")
})

// Train NLP classifier
// trainClassifier();

// Routes
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));