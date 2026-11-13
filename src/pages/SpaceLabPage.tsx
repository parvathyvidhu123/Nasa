import React, { useState } from 'react';
import { SPACE_LAB_QUESTIONS } from '../data/spaceLabData';
import { GameMode, QuizQuestion } from '../types/quiz';
import { Breadcrumbs } from '../components/Breadcrumbs';
import confetti from 'canvas-confetti';
import { 
  GraduationCap, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ChevronRight, 
  HelpCircle,
  Trophy,
  Flame,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const SpaceLabPage: React.FC = () => {
  const [activeMode, setActiveMode] = useState<GameMode | 'all'>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const modes: Array<{ id: GameMode | 'all'; label: string }> = [
    { id: 'all', label: 'All Challenges' },
    { id: 'guess-spacecraft', label: 'Guess The Spacecraft' },
    { id: 'match-destination', label: 'Match The Destination' },
    { id: 'status-check', label: 'Active or Inactive?' },
    { id: 'history-challenge', label: 'Mission History' },
    { id: 'planet-identification', label: 'Planet Identification' },
  ];

  // Filter questions based on active mode
  const currentQuestions = React.useMemo(() => {
    if (activeMode === 'all') return SPACE_LAB_QUESTIONS;
    return SPACE_LAB_QUESTIONS.filter(q => q.mode === activeMode);
  }, [activeMode]);

  const currentQ = currentQuestions[currentQuestionIndex] || currentQuestions[0];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.correct_index;
    if (isCorrect) {
      setScore(prev => prev + 100 + streak * 20);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < currentQuestions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestartQuiz = (newMode?: GameMode | 'all') => {
    if (newMode) setActiveMode(newMode);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setQuizFinished(false);
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <Breadcrumbs items={[{ label: 'EDUCATIONAL SPACE LAB' }]} />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-space-accent uppercase tracking-widest mb-2">
          <GraduationCap className="w-4 h-4 text-space-accent" />
          <span>Interactive Student Learning</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-space-text">
          NASA EDUCATIONAL SPACE LAB
        </h1>
        <p className="text-sm text-space-muted mt-2 max-w-2xl leading-relaxed">
          Put your space knowledge to the test! Complete interactive challenges based on authentic NASA missions, active/passive statuses, and planetary discoveries.
        </p>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none font-mono text-xs">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => handleRestartQuiz(mode.id)}
            className={`px-3.5 py-1.5 rounded-xl border text-xs whitespace-nowrap transition-all ${
              activeMode === mode.id
                ? 'bg-space-accent text-space-dark font-bold border-space-accent shadow-glow-accent'
                : 'bg-space-card text-space-muted border-space-border hover:text-space-text'
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>

      {/* Score & Streak HUD */}
      <div className="grid grid-cols-3 gap-3 bg-space-card/90 backdrop-blur-md rounded-2xl border border-space-border p-4 mb-8 text-xs font-mono shadow-card-elevated">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400" />
          <div>
            <span className="text-[10px] text-space-muted block uppercase">Score</span>
            <span className="font-bold text-space-text text-sm">{score} PTS</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-orange-400" />
          <div>
            <span className="text-[10px] text-space-muted block uppercase">Streak</span>
            <span className="font-bold text-space-warning text-sm">{streak}x</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-space-accent" />
          <div>
            <span className="text-[10px] text-space-muted block uppercase">Progress</span>
            <span className="font-bold text-space-text text-sm">
              {currentQuestionIndex + 1} / {currentQuestions.length}
            </span>
          </div>
        </div>
      </div>

      {!quizFinished ? (
        /* Question Card */
        <div className="bg-space-card rounded-2xl border border-space-border/80 overflow-hidden shadow-card-elevated p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-space-border/60 mb-6 font-mono text-xs">
            <span className="px-2.5 py-0.5 rounded bg-space-secondary text-space-accent border border-space-border uppercase">
              {currentQ.difficulty}
            </span>
            <span className="text-space-muted">
              Question {currentQuestionIndex + 1} of {currentQuestions.length}
            </span>
          </div>

          <h2 className="font-heading font-bold text-xl sm:text-2xl text-space-text mb-4 leading-snug">
            {currentQ.question}
          </h2>

          {/* Authentic NASA Reference Image */}
          {currentQ.image_url && (
            <div className="relative aspect-video sm:aspect-[21/9] rounded-xl overflow-hidden border border-space-border/80 mb-6 bg-space-dark">
              <img
                src={currentQ.image_url}
                alt="NASA Reference"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Graceful fallback
                  (e.target as HTMLImageElement).src = 'https://images-assets.nasa.gov/image/PIA19920/PIA19920~medium.jpg';
                }}
              />
              {currentQ.image_credit && (
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-space-muted bg-space-dark/80 px-2 py-0.5 rounded backdrop-blur-sm">
                  {currentQ.image_credit}
                </div>
              )}
            </div>
          )}

          {/* Options */}
          <div className="flex flex-col gap-3 mb-6">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correct_index;

              let btnClass = 'bg-space-secondary/60 border-space-border/80 text-space-text hover:border-space-accent/50';

              if (isAnswered) {
                if (isCorrect) {
                  btnClass = 'bg-emerald-950/50 border-emerald-500 text-space-success font-semibold';
                } else if (isSelected) {
                  btnClass = 'bg-rose-950/50 border-rose-500 text-rose-300 font-semibold';
                } else {
                  btnClass = 'bg-space-secondary/30 border-space-border/40 text-space-muted opacity-50';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${btnClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-space-card border border-space-border flex items-center justify-center font-mono text-xs">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {isAnswered && (
                    <div>
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-space-success" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-400" />
                      ) : null}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner when answered */}
          {isAnswered && (
            <div className="p-5 rounded-xl bg-space-secondary/80 border border-space-border animate-fade-in mb-6">
              <div className="font-mono text-xs font-semibold mb-2 flex items-center gap-2">
                {selectedOption === currentQ.correct_index ? (
                  <span className="text-space-success flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                  </span>
                ) : (
                  <span className="text-rose-400 flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> Incorrect
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-space-text leading-relaxed font-sans mb-3">
                {currentQ.explanation}
              </p>
              <div className="text-xs font-mono text-space-accent bg-space-card/60 p-2.5 rounded-lg border border-space-border flex items-start gap-2">
                <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Did You Know? {currentQ.did_you_know}</span>
              </div>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex items-center justify-between pt-4 border-t border-space-border">
              {currentQ.hardware_id && (
                <Link
                  to={`/hardware/${currentQ.hardware_id}`}
                  className="text-xs font-mono text-space-muted hover:text-space-accent"
                >
                  Inspect Hardware Record →
                </Link>
              )}
              <button
                onClick={handleNextQuestion}
                className="ml-auto flex items-center gap-2 px-6 py-2.5 rounded-xl bg-space-accent text-space-dark font-mono font-bold text-xs hover:bg-space-accent/90 transition-all shadow-glow-accent"
              >
                <span>{currentQuestionIndex + 1 === currentQuestions.length ? 'COMPLETE QUIZ' : 'NEXT QUESTION'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Results Screen */
        <div className="bg-space-card rounded-2xl border border-space-accent/40 p-8 sm:p-12 text-center shadow-card-elevated animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-space-accent/20 border border-space-accent flex items-center justify-center mx-auto mb-6 text-space-accent">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl text-space-text mb-2">
            MISSION CHALLENGE COMPLETE!
          </h2>
          <p className="text-sm text-space-muted mb-6">
            Congratulations, explorer! You have completed the educational challenge.
          </p>

          <div className="inline-flex items-center gap-4 bg-space-secondary p-4 rounded-xl border border-space-border mb-8 font-mono">
            <div className="text-center px-4">
              <span className="text-xs text-space-muted uppercase block">Final Score</span>
              <span className="text-2xl font-bold text-space-accent">{score}</span>
            </div>
            <div className="w-px h-8 bg-space-border" />
            <div className="text-center px-4">
              <span className="text-xs text-space-muted uppercase block">Questions Answered</span>
              <span className="text-2xl font-bold text-space-text">{currentQuestions.length}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleRestartQuiz()}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-space-accent text-space-dark font-mono font-bold text-xs hover:bg-space-accent/90 transition-colors shadow-glow-accent"
            >
              <RotateCcw className="w-4 h-4" />
              <span>PLAY AGAIN</span>
            </button>
            <Link
              to="/solar-system"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-space-secondary text-space-text border border-space-border hover:border-space-accent/60 font-mono text-xs font-semibold transition-colors"
            >
              <span>EXPLORE SOLAR SYSTEM 3D</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

