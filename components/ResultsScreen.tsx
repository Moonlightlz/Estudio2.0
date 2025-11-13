
import React from 'react';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, totalQuestions, onRestart }) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    const getFeedback = () => {
        if (percentage === 100) return { message: "¡Perfección Absoluta!", emoji: "🏆" };
        if (percentage >= 80) return { message: "¡Conocimiento de experto!", emoji: "🧠" };
        if (percentage >= 50) return { message: "¡Buen trabajo!", emoji: "👍" };
        return { message: "¡Sigue estudiando el proyecto!", emoji: "📚" };
    }

    const feedback = getFeedback();

  return (
    <div className="text-center p-8 bg-white rounded-2xl shadow-lg animate-fade-in-up">
      <h1 className="text-4xl md:text-5xl font-serif text-peach-dark mb-4">Quiz Completado</h1>
      <div className="my-8">
        <span className="text-7xl">{feedback.emoji}</span>
        <p className="text-2xl font-bold text-brown mt-4">{feedback.message}</p>
      </div>

      <div className="bg-cream p-6 rounded-lg mb-8">
        <p className="text-xl text-brown/70">Tu Puntuación:</p>
        <p className="text-6xl font-bold text-brown my-2">
          {score} <span className="text-3xl font-normal text-brown/60">/ {totalQuestions}</span>
        </p>
         <p className="text-2xl font-semibold text-mint-dark">({percentage}%)</p>
      </div>
      
      <button
        onClick={onRestart}
        className="w-full sm:w-auto bg-peach-light text-white font-bold py-3 px-12 rounded-full text-xl shadow-md hover:bg-peach-dark focus:outline-none focus:ring-4 focus:ring-peach/50 transform hover:scale-105 transition-all duration-300"
      >
        Jugar de Nuevo
      </button>
    </div>
  );
};

export default ResultsScreen;
