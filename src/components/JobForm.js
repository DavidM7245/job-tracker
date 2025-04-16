import React, { useState } from "react";

function JobForm({ addJob }) {
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [status, setStatus] = useState('');  // Fixed: added setStatus

    const handleSubmit = (e) => {
        e.preventDefault();

        const newJob = {
            title: jobTitle,
            company: company,
            status: status, 
        };

        addJob(newJob);

        setJobTitle('');
        setCompany('');
        setStatus('');  // Fixed: changed setstatus to setStatus
    };

    return (
        <div>
          <h2>Add a Job Application</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Job Title</label>
              <input
                type="text"
                value={jobTitle}  // Fixed: changed jobtitle to jobTitle
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Company</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Status</label>
              <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}  // Fixed: added setStatus
                required
              />
            </div>
            <button type="submit">Add Job</button>
          </form>
        </div>
    );
}

export default JobForm;