import React from "react";
import "../styles/Timer.css";

interface TimerProps {
  timeLeft: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  return (
    <div className="timer">
      <p>Time left: <span className="time-number">{timeLeft}s</span></p>
    </div>
  );
};

export default Timer;
