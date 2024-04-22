import React, { useState } from 'react';
import './UserInputPage.css'
const UserInputPage = ({questionType,setQuestionType,setSingleQuestion,setMultipleQuestions}) => {
  // const [qt, setqt] = useState('');
  const [sq, setsq] = useState('');
  const [mq, setmq] = useState();

  const handleSingleQuestionSubmit = (e) => {
    e.preventDefault();
    console.log('Single question submitted:', sq);
    setSingleQuestion(sq);
  };

  const handleMultipleQuestionsSubmit = (e) => {
    e.preventDefault();
    const questionsArray = mq.split('\n').filter(Boolean);
    console.log('Multiple questions submitted:', questionsArray);
    setMultipleQuestions(questionsArray);
  };

    return (
        
        <div className="container">
        <h1>Question Input</h1>
        <div id="question-type" style={{ textAlign: 'center' }}>
          <h2>Select a Question Type</h2>
          <select value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
            <option value="">Select Question Type</option>
            <option value="CN">Computer Networks</option>
            <option value="OS">Operating Systems</option>
            <option value="DBMS">Database Management Systems</option>
          </select>
        </div>
        {questionType && (
          <div id="question-input">
            <h2>Question Input</h2>
            <form>
              {questionType !== '' && (
                <div>
                  <label htmlFor="single-question-input">Enter your single question:</label>
                  <input type="text" id="single-question-input" style={{ marginRight: '10px' }} value={sq} onChange={(e) => setsq(e.target.value)} />
                  <button onClick={handleSingleQuestionSubmit}>Submit Single Question</button>
                </div>
              )}
              <br /><br />
              <div>
                <label htmlFor="questions">Enter your questions (separated by enter):</label>
                <textarea id="questions" style={{ marginRight: '10px' }} value={mq} onChange={(e) => setmq(e.target.value)} rows="5"></textarea>
                <button onClick={handleMultipleQuestionsSubmit}>Submit Multiple Questions</button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
};
export default UserInputPage