import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { quizQuestions } from '@/data/artData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, Trophy, RotateCcw, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    
    setShowResult(true);
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
    setAnsweredQuestions([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) return "Perfect! You're an art master! 🎨";
    if (percentage >= 80) return "Excellent! You really know your art!";
    if (percentage >= 60) return "Good job! Keep learning!";
    if (percentage >= 40) return "Not bad! There's more to discover.";
    return "Keep exploring! Art has so much to offer.";
  };

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Trophy className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quiz Complete!
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              You scored <span className="text-primary font-bold">{score}</span> out of <span className="font-bold">{quizQuestions.length}</span>
            </p>
            <p className="text-muted-foreground mb-8">{getScoreMessage()}</p>

            <div className="flex gap-4 justify-center">
              <Button onClick={resetQuiz} variant="outline" className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Try Again
              </Button>
              <Button onClick={resetQuiz} className="gap-2">
                New Quiz
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-medium uppercase tracking-wide">
            Test Your Knowledge
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Art Quiz Challenge
          </h1>
        </div>

        {/* Quiz Card */}
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <Badge variant="secondary">{question.difficulty}</Badge>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {question.options.map((option) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === question.correctAnswer;
                const showCorrect = showResult && isCorrect;
                const showIncorrect = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-lg border transition-all ${
                      showCorrect
                        ? 'bg-green-50 border-green-500 text-green-800'
                        : showIncorrect
                        ? 'bg-red-50 border-red-500 text-red-800'
                        : isSelected
                        ? 'bg-primary/10 border-primary'
                        : 'bg-background border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={showCorrect || showIncorrect ? 'font-medium' : ''}>
                        {option}
                      </span>
                      {showCorrect && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                      {showIncorrect && <XCircle className="h-5 w-5 text-red-600" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Score: <span className="font-bold text-foreground">{score}</span>
              </div>
              
              {!showResult ? (
                <Button onClick={handleSubmit} disabled={!selectedAnswer}>
                  Check Answer
                </Button>
              ) : (
                <Button onClick={handleNext} className="gap-2">
                  {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
