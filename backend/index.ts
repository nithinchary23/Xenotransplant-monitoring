// backend/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import patientsRoutes from './routes/patients'; // Import the patients routes

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests only from the frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json()); // to parse JSON request bodies

// Routes
app.use('/api/patients', patientsRoutes); // Register the patient routes

app.get('/', (_req, res) => {
  res.send('🚀 Xenotransplant Monitoring Backend is running.');
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
