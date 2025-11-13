
import React, { useState, useCallback } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import { GameState } from './types';
import { quizData } from './data/quizData';

// Shuffle questions array
const shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Welcome);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const startQuiz = useCallback(() => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setGameState(GameState.Quiz);
  }, []);

  const handleNextQuestion = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState(GameState.Results);
    }
  }, [currentQuestionIndex]);

  const restartQuiz = useCallback(() => {
    startQuiz();
  }, [startQuiz]);
  
  const renderScreen = () => {
    switch (gameState) {
      case GameState.Quiz:
        return (
          <QuizScreen
            question={shuffledQuestions[currentQuestionIndex]}
            onNextQuestion={handleNextQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={shuffledQuestions.length}
          />
        );
      case GameState.Results:
        return (
          <ResultsScreen
            score={score}
            totalQuestions={shuffledQuestions.length}
            onRestart={restartQuiz}
          />
        );
      case GameState.Welcome:
      default:
        return <WelcomeScreen onStart={startQuiz} />;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-cream">
       <main className="w-full max-w-2xl mx-auto">
        {renderScreen()}
      </main>
      <footer className="w-full text-center p-4 mt-8 text-brown/50 text-sm">
        <p>Built with Gemini | Interactive Project Quiz</p>
      </footer>
    </div>
  );
};

export default App;
