import React from 'react';
import { useParams } from 'react-router-dom';

function JobDetails({ jobs }) {
  const { id } = useParams();
  const job = jobs[id];

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p>Company: {job.company}</p>
      <p>Status: {job.status}</p>
    </div>
  );
}

export default JobDetails;