import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.scss';
import CandidateComponent from './pages/candidate/candidate.component';
import Details from './pages/details/details.component';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:3010/candidates/')
      .then((res) => setCandidates(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (e) => {
    const candidate = candidates.find((c) => +e.target.id === c.id);
    setSelectedCandidate(candidate);
  };

  return (
    <div className='app'>
      <CandidateComponent handleClick={handleClick} candidates={candidates} />
      <div className='app-line' />
      <Details selectedCandidate={selectedCandidate} />
    </div>
  );
}

export default App;
