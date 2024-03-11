import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainigTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainigTime((prevRemaingTIme) => prevRemaingTIme - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime}/>;
};

export default QuestionTimer;
