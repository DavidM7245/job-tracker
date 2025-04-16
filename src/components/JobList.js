import React from 'react';
import JobItem from './JobItem';

function JobList({ jobs }) {
  return (
    <div>
      <h2>Job Applications</h2>
      <div className="job-list">
        {jobs.map((job, index) => (
          <JobItem 
            key={index}
            job={job}
          />
        ))}
      </div>
    </div>
  );
}

export default JobList;