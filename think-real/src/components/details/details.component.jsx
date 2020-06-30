import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './details.styles.scss';

import QuestionComponent from '../../components/question/question.component';

const Details = ({ selectedCandidate }) => {
  const [application, setApplication] = useState({});

  const isSelectedEmpty = Object.keys(selectedCandidate).length === 0;
  const { applicationId } = selectedCandidate;

  useEffect(() => {
    setApplication({});
    axios
      .get(`http://localhost:3010/applications/${applicationId}`)
      .then((res) => setApplication(res.data))
      .catch((err) => console.log(err));
  }, [applicationId]);

  const { videos } = application;

  return (
    <div className='details'>
      <h1>Candidate details:</h1>
      <div className='details-videos'>
        {isSelectedEmpty ? (
          <h3>Select the candidate to see the application</h3>
        ) : applicationId ? (
          //   <div>
          <div className='video-container'>
            {videos
              ? videos.map((v) => (
                  <div className='video'>
                    <video key={v.questionId} width='270' controls>
                      <source src={v.src} type='video/mp4' />
                      Your browser does not support HTML video.
                    </video>
                    <div>
                      <QuestionComponent questionId={v.questionId} />
                    </div>
                  </div>
                ))
              : null}
          </div>
        ) : (
          <h2>The candidate has no application</h2>
        )}
      </div>
    </div>
  );
};

export default Details;
