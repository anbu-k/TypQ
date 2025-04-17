import React from "react";
import "../styles/Stats.css";

interface StatsProps {
  wpm: number;
  accuracy: number;
  onRetry: () => void;
}

const Stats: React.FC<StatsProps> = ({ wpm, accuracy, onRetry }) => {
  return (
    <div className="stats-container">
      <p>WPM: <span className="wpm">{wpm}</span></p>
      <p>Accuracy: <span className="accuracy">{accuracy}%</span></p>
      <button className="retry-button" onClick={onRetry}>Try Again</button>
    </div>
  );
};

export default Stats;
