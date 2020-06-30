import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './question.styles.scss';

const QuestionComponent = ({ questionId }) => {
  const [question, setQuestion] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:3010/questions/${questionId}`)
      .then((res) => setQuestion(res.data.question))
      .catch((err) => console.log(err));
  }, [questionId]);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // axios
    //   .patch(`http://localhost:3010/applications/${applicationId}`, {
    //     comment: { input },
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    setComment('');
    // console.log(e.target);
  };

  return (
    <div>
      <h4>{question}</h4>
      <div className='question-component'>
        <input
          key={questionId}
          type='text'
          placeholder='comment'
          name={`${questionId}`}
          value={comment}
          onChange={(event) => handleChange(event)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default QuestionComponent;
