import { useState } from "react";
import QUESTIONS from "../questions.js";

const Quiz = () => {
  const [userAnswers, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer]
    });
  }
  return (
    <div id="quiz">
        <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Quiz;
