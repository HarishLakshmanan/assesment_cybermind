import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Job from './model/Job.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/jobs', async (req, res) => {
    try {
        const {
            title, company, location, jobType,
            salaryMin, salaryMax, deadline, description
        } = req.body;

        const newJob = new Job({
            title,
            company,
            location,
            jobType,
            salaryRange: {
                min: salaryMin,
                max: salaryMax
            },
            deadline,
            description
        });

        await newJob.save();
        res.status(201).json({ message: 'Job created', job: newJob });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
