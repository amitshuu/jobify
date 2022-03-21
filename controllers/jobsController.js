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

const createJob = (req, res) => {
  res.send('Create job');
};

export { getAllJobs, updateJob, deleteJob, showStats, createJob };
