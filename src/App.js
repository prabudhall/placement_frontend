// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserInputPage from './Components/UserInputPage/UserInputPage';
import InputDisplayPage from './Components/InputDisplayPage/InputDisplayPage';
import React, {useState} from 'react';

function App() {
  const [questionType, setQuestionType] = useState('');
  const [singleQuestion, setSingleQuestion] = useState('');
  const [multipleQuestions, setMultipleQuestions] = useState([]);
  return (
    <>
    {/* <Router>
      <Routes> */}
      
        <UserInputPage questionType={questionType} setQuestionType={setQuestionType} setSingleQuestion={setSingleQuestion} setMultipleQuestions = {setMultipleQuestions} />
        <InputDisplayPage path="/display" questionType={questionType} singleQuestion={singleQuestion} multipleQuestions={multipleQuestions} />
        {/* <Route path="/display" element = {<InputDisplayPage/>}/> */}
      {/* </Routes>
        
      
    </Router> */}
    
    </>
    
  );
}

export default App;
