
import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center p-8 bg-white rounded-2xl shadow-lg animate-fade-in-up">
      <h1 className="text-4xl md:text-5xl font-serif text-peach-dark mb-2">Proyecto de la Pastelería modo estudio activated</h1>
      <p className="text-brown/70 mb-8 text-lg">
        ultimo final de verdad final 6.0.
      </p>
      <div className="mb-8">
        <span className="text-7xl">🧁</span>
      </div>
      <button
        onClick={onStart}
        className="w-full sm:w-auto bg-peach-light text-white font-bold py-3 px-12 rounded-full text-xl shadow-md hover:bg-peach-dark focus:outline-none focus:ring-4 focus:ring-peach/50 transform hover:scale-105 transition-all duration-300"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default WelcomeScreen;
