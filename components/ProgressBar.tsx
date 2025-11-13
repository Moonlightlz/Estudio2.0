
import React from 'react';

interface ProgressBarProps {
  duration: number;
  timeLeft: number;
  isPaused: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration, timeLeft, isPaused }) => {
  const percentage = (timeLeft / duration) * 100;
  const colorClass = percentage > 50 ? 'bg-mint-dark' : percentage > 20 ? 'bg-yellow-400' : 'bg-red-500';

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6 overflow-hidden">
      <div
        className={`h-2.5 rounded-full ${colorClass}`}
        style={{ width: `${percentage}%`, transition: isPaused ? 'none' : 'width 1s linear' }}
      ></div>
    </div>
  );
};

export default ProgressBar;
