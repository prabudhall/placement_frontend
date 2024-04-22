// DisplayPage.js

import React from 'react';
import './InputDisplayPage.css'

function InputDisplayPage({questionType,singleQuestion,multipleQuestions}) {
 
  
  return (
    <div className="container">
  <h1>Display Page</h1>
  <div className="content">
    <h4>Question Type: {questionType}</h4>
    <div className="questions">
      {questionType && (
        <div>
          {singleQuestion && (
            <div className="question">
              <h3>Single Question:</h3>
              <p>{singleQuestion}</p>
            </div>
          )}
          {multipleQuestions.length > 0 && (
            <div className="question">
              <h3>Multiple Questions:</h3>
              <ul>
                {multipleQuestions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
</div>

  );
}

export default InputDisplayPage;
