import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainigTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
        clearTimeout(timer)
    }
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainigTime((prevRemaingTIme) => prevRemaingTIme - 100);
    }, 100);

    return () => {
       clearInterval(interval)
    }
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime}/>;
};

export default QuestionTimer;
