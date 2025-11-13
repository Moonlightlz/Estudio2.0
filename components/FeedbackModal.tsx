import React, { useEffect } from 'react';

interface FeedbackModalProps {
  isCorrect: boolean;
  isTimeUp: boolean;
  explanation: string;
  correctAnswer: string;
  onNext: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isCorrect, isTimeUp, explanation, correctAnswer, onNext }) => {
  
  const title = isTimeUp ? "¡Se acabó el tiempo!" : isCorrect ? "¡Excelente, buen trabajo!" : "¡Respuesta incorrecta!";
  const titleColor = isCorrect ? "text-mint-dark" : "text-red-500";
  const borderColor = isCorrect ? "border-mint-dark" : "border-red-500";

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl animate-fade-in-up">
        <h2 className={`text-2xl sm:text-3xl font-bold font-serif mb-4 ${titleColor}`}>{title}</h2>
        
        {!isCorrect && (
             <div className="mb-4 text-brown/80">
                <p>La respuesta correcta es:</p>
                <p className={`font-bold p-3 bg-mint/20 border-l-4 ${borderColor} rounded-r-lg`}>{correctAnswer}</p>
            </div>
        )}
       
        <div className="text-brown/90 space-y-2">
            <h3 className="font-bold text-lg">Explicación:</h3>
            <p className="text-base leading-relaxed">{explanation}</p>
        </div>

        <div className="mt-6 text-center">
            <button
                onClick={onNext}
                className="w-full bg-peach-light text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-peach-dark focus:outline-none focus:ring-4 focus:ring-peach/50 transition-all duration-300"
            >
                Siguiente Pregunta
            </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
