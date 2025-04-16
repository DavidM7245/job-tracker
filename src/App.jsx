import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './App.css';

function App() {
  const [jobs, setJobs] = React.useState([]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <Router>
      <div className="App">
        <AppRoutes jobs={jobs} addJob={addJob} />
      </div>
    </Router>
  );
}

export default App;