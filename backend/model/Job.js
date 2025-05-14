import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  jobType: String,
  salaryRange: {
    min: Number,
    max: Number,
  },
  deadline: Date,
  description: String,
}, {
  timestamps: true
});

const Job = mongoose.model('Job', jobSchema);
export default Job;
