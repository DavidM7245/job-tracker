import { Routes, Route } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import JobForm from './components/JobForm';

function AppRoutes({ jobs, addJob }) {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <JobForm addJob={addJob} />
          <JobList jobs={jobs} />
        </>
      } />
      <Route path="/job/:id" element={<JobDetails jobs={jobs} />} />
    </Routes>
  );
}

export default AppRoutes;