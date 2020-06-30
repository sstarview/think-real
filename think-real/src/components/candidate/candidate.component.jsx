import React from 'react';

import './candidate.styles.scss';

const CandidateComponent = ({ candidates, handleClick }) => (
  <div className='candidates'>
    <h1 className='candidates-header'>Candidates</h1>
    <div className='candidate-list'>
      {candidates.map((candidate) => (
        <h3 onClick={handleClick} id={candidate.id} key={candidate.id}>
          {candidate.name}
        </h3>
      ))}
    </div>
  </div>
);

export default CandidateComponent;
