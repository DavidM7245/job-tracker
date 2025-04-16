import React from 'react';

function JobItem({ job }) {
  return (
    <div className="job-item">
      <h3>{job.title}</h3>
      <p>Company: {job.company}</p>
      <p>Status: {job.status}</p>
    </div>
  );
}

export default JobItem;