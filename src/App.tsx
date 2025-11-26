import { useState } from "react";
import { QuestionScreen } from "./components/QuestionScreen";
import { ResultsScreen } from "./components/ResultsScreen";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "What color is the sky on a clear day?",
    options: ["Green", "Blue", "Red"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin"],
    correctAnswer: 1,
  },
];

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleStartAgain = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const allQuestionsAnswered = selectedAnswers.every(
    (answer) => answer !== null
  );

  if (showResults) {
    return (
      <ResultsScreen
        score={calculateScore()}
        onStartAgain={handleStartAgain}
        totalQuestions={questions.length}
        currentQuestion={questions[currentQuestionIndex]}
      />
    );
  }

  return (
    <QuestionScreen
      question={questions[currentQuestionIndex]}
      currentIndex={currentQuestionIndex}
      totalQuestions={questions.length}
      selectedAnswer={selectedAnswers[currentQuestionIndex]}
      onSelectAnswer={handleSelectAnswer}
      onNext={handleNext}
      onPrevious={handlePrevious}
      canGoNext={selectedAnswers[currentQuestionIndex] !== null}
      canGoPrevious={currentQuestionIndex > 0}
      allQuestionsAnswered={allQuestionsAnswered}
    />
  );
}
