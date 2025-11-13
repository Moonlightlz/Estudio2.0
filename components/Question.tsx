
import React from 'react';
import { Question as QuestionType } from '../types';

interface QuestionProps {
  question: QuestionType;
  onAnswerSelect: (index: number) => void;
  selectedAnswer: number | null;
  isAnswered: boolean;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswerSelect, selectedAnswer, isAnswered }) => {

  const getButtonClass = (index: number) => {
    if (!isAnswered) {
      return "bg-white hover:bg-cream border-brown/20";
    }
    if (index === question.correctAnswerIndex) {
      return "bg-mint/80 border-mint-dark text-white";
    }
    if (index === selectedAnswer) {
      return "bg-red-400 border-red-600 text-white";
    }
    return "bg-gray-100 border-gray-200 text-brown/50";
  };
  
  const getIcon = (index: number) => {
    if (!isAnswered) return null;
    if (index === question.correctAnswerIndex) {
      return <CheckIcon />;
    }
    if (index === selectedAnswer) {
      return <XIcon />;
    }
    return null;
  };

  return (
    <div>
      <p className="bg-peach-light/20 text-peach-dark text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1 inline-block mb-4">{question.category}</p>
      <h2 className="text-2xl md:text-3xl font-serif text-brown mb-6">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            disabled={isAnswered}
            className={`w-full text-left p-4 border-2 rounded-lg text-lg flex justify-between items-center transition-all duration-300 ${getButtonClass(index)} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <span className="flex-grow">{option}</span>
            {getIcon(index)}
          </button>
        ))}
      </div>
    </div>
  );
};

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export default Question;
