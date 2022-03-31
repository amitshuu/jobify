import BadRequestError from '../errors/bad-request.js';
import Job from '../models/Job.js';

const getAllJobs = (req, res) => {
  res.send('Get all jobs');
};

const updateJob = (req, res) => {
  res.send('Update job');
};

const deleteJob = (req, res) => {
  res.send('Delete job');
};

const showStats = (req, res) => {
  res.send('Show stats');
};

const createJob = async (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    throw new BadRequestError('Please provide all values!');
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(201).json({ job });
};

export { getAllJobs, updateJob, deleteJob, showStats, createJob };
