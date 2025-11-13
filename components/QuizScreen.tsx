import React, { useState, useEffect, useCallback } from 'react';
import { Question } from '../types';
import FeedbackModal from './FeedbackModal';

interface QuizScreenProps {
  question: Question;
  onNextQuestion: (isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
  onRestart: () => void;
  onStop: () => void;
}

const TIME_LIMIT = 20; // in seconds

const QuizScreen: React.FC<QuizScreenProps> = ({ question, onNextQuestion, questionNumber, totalQuestions, onRestart, onStop }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnswered) {
      const isCorrect = selectedOptionIndex === question.correctAnswerIndex;
      onNextQuestion(isCorrect);
      // Reset state for next question
      setSelectedOptionIndex(null);
      setIsAnswered(false);
      setShowFeedback(false);
      setTimeLeft(TIME_LIMIT);
      setIsPaused(false);
    }
  }, [isAnswered, selectedOptionIndex, question.correctAnswerIndex, onNextQuestion]);

  useEffect(() => {
    if (isPaused || isAnswered) {
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsAnswered(true);
          setShowFeedback(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    if (isAnswered) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isAnswered, handleNext, isPaused]);

  const handleStopClick = () => {
    setIsPaused(prev => !prev);
    onStop(); // Llama a la función para mantener la prop, aunque esté vacía
  };

  const handleOptionClick = (index: number) => {
    if (!isAnswered) {
      setSelectedOptionIndex(index);
      setIsAnswered(true);
      setShowFeedback(true);
    }
  };

  const getButtonClass = (index: number) => {
    if (!isAnswered) {
      return "bg-white hover:bg-cream";
    }
    if (index === question.correctAnswerIndex) {
      return "bg-mint/50 border-mint-dark";
    }
    if (index === selectedOptionIndex) {
      return "bg-red-300/50 border-red-500";
    }
    return "bg-white opacity-60";
  };

  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="w-full max-w-3xl p-4 sm:p-8 bg-white rounded-2xl shadow-lg animate-fade-in-up">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <div className="flex gap-2">
            <button onClick={handleStopClick} className="text-sm bg-yellow-100 text-yellow-800 font-semibold py-1 px-3 rounded-full hover:bg-yellow-200 transition-colors w-20">
              {isPaused ? 'Reanudar' : 'Detener'}
            </button>
            <button onClick={onRestart} className="text-sm bg-red-100 text-red-700 font-semibold py-1 px-3 rounded-full hover:bg-red-200 transition-colors">Reiniciar</button>
        </div>
        <div className="text-lg font-bold text-brown/60">
          Pregunta <span className="text-peach-dark">{questionNumber}</span> / {totalQuestions}
        </div>
      </div>

      <div className="w-full bg-cream rounded-full h-2.5 mb-6">
        <div className="bg-peach-light h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <div className="text-center mb-2">
        <span className="text-sm font-semibold bg-mint/30 text-mint-dark px-3 py-1 rounded-full">{question.category}</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-serif text-brown text-center mb-8">{question.question}</h2>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 text-brown font-medium text-lg ${getButtonClass(index)}`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="text-5xl font-bold text-peach-dark">{timeLeft}</div>
        <div className="text-sm text-brown/50">segundos restantes</div>
      </div>

      {showFeedback && (
        <FeedbackModal
          isCorrect={selectedOptionIndex === question.correctAnswerIndex}
          isTimeUp={timeLeft === 0 && selectedOptionIndex === null}
          explanation={question.explanation}
          correctAnswer={question.options[question.correctAnswerIndex]}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default QuizScreen;