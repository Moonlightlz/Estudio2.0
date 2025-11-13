
import React, { useState, useEffect, useCallback } from 'react';
import { Question as QuestionType } from '../types';
import Question from './Question';
import FeedbackModal from './FeedbackModal';
import ProgressBar from './ProgressBar';

interface QuizScreenProps {
  question: QuestionType;
  onNextQuestion: (isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ question, onNextQuestion, questionNumber, totalQuestions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showFeedback, setShowFeedback] = useState(false);

  const resetState = useCallback(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowFeedback(false);
    setTimeLeft(15);
  }, []);
  
  useEffect(() => {
    resetState();
  }, [question, resetState]);

  useEffect(() => {
    if (isAnswered) return;
    if (timeLeft === 0) {
      setIsAnswered(true);
      setShowFeedback(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isAnswered]);

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedAnswer(index);
    setShowFeedback(true);
  };
  
  const handleNext = () => {
    const isCorrect = selectedAnswer === question.correctAnswerIndex;
    onNextQuestion(isCorrect);
  };

  const isTimeUp = timeLeft === 0 && selectedAnswer === null;
  const isCorrect = selectedAnswer === question.correctAnswerIndex;

  return (
    <div className="p-4 sm:p-8 bg-white rounded-2xl shadow-lg w-full animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-brown/60">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="flex items-center gap-2 text-lg font-bold text-peach-dark">
           <TimerIcon />
           <span>{timeLeft}s</span>
        </div>
      </div>
      <ProgressBar duration={15} timeLeft={timeLeft} isPaused={isAnswered} />
      
      <Question 
        question={question}
        onAnswerSelect={handleAnswerSelect}
        selectedAnswer={selectedAnswer}
        isAnswered={isAnswered}
      />
      
      {showFeedback && (
        <FeedbackModal 
          isCorrect={isCorrect}
          isTimeUp={isTimeUp}
          explanation={question.explanation}
          correctAnswer={question.options[question.correctAnswerIndex]}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

const TimerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export default QuizScreen;
