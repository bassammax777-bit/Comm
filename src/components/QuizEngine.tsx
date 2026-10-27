/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { QuestionItem, Category, QuestionType } from '../types/quiz';
import { QUESTIONS_DATA, CATEGORIES } from '../data/questionsData';
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  Award,
  BookOpen,
  Filter,
  Check,
  X,
  Volume2,
  VolumeX,
  Sparkles
} from 'lucide-react';

interface QuizEngineProps {
  initialCategory?: Category;
  initialCount?: number;
  onlyMissed?: boolean;
  onlyBookmarked?: boolean;
  missedIds: string[];
  bookmarkedIds: string[];
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
  onRecordAnswer: (questionId: string, selected: string, isCorrect: boolean) => void;
  onSaveQuizSession: (session: { score: number; total: number; categoryFilter?: string; typeFilter?: string }) => void;
  onExit: () => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  initialCategory,
  initialCount,
  onlyMissed,
  onlyBookmarked,
  missedIds,
  bookmarkedIds,
  isBookmarked,
  onToggleBookmark,
  onRecordAnswer,
  onSaveQuizSession,
  onExit
}) => {
  // Configuration states
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(initialCategory || 'all');
  const [selectedType, setSelectedType] = useState<QuestionType | 'all'>('all');
  const [questionCount, setQuestionCount] = useState<number>(initialCount || 25);
  const [isExamMode, setIsExamMode] = useState<boolean>(false); // false = Instant practice feedback, true = Exam with final score
  const [isConfiguring, setIsConfiguring] = useState<boolean>(!initialCategory && !initialCount && !onlyMissed && !onlyBookmarked);

  // Active quiz state
  const [activeQuestions, setActiveQuestions] = useState<QuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);

  // Sound feedback toggle
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  // Initialize or start quiz
  const startQuiz = useCallback((customList?: QuestionItem[]) => {
    let pool = [...QUESTIONS_DATA];

    if (onlyMissed) {
      pool = pool.filter(q => missedIds.includes(q.id));
    } else if (onlyBookmarked) {
      pool = pool.filter(q => bookmarkedIds.includes(q.id));
    } else {
      if (selectedCategory !== 'all') {
        pool = pool.filter(q => q.category === selectedCategory);
      }
      if (selectedType !== 'all') {
        pool = pool.filter(q => q.type === selectedType);
      }
    }

    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const finalSelection = customList || (questionCount === -1 ? shuffled : shuffled.slice(0, questionCount));

    if (finalSelection.length === 0) {
      alert('No questions match this filter criteria. Starting with all questions instead.');
      setActiveQuestions(QUESTIONS_DATA.slice(0, 25));
    } else {
      setActiveQuestions(finalSelection);
    }

    setCurrentIndex(0);
    setUserAnswers({});
    setShowExplanation(false);
    setQuizCompleted(false);
    setSecondsElapsed(0);
    setTimerActive(true);
    setIsConfiguring(false);
  }, [selectedCategory, selectedType, questionCount, onlyMissed, onlyBookmarked, missedIds, bookmarkedIds]);

  // Initial trigger if launching with props
  useEffect(() => {
    if (!isConfiguring && activeQuestions.length === 0) {
      startQuiz();
    }
  }, [isConfiguring, activeQuestions.length, startQuiz]);

  // Stopwatch timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && !quizCompleted) {
      interval = setInterval(() => {
        setSecondsElapsed(sec => sec + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, quizCompleted]);

  const currentQuestion = activeQuestions[currentIndex];
  const currentSelected = currentQuestion ? userAnswers[currentQuestion.id] : undefined;
  const isAnswered = currentSelected !== undefined;

  const handleSelectAnswer = (choice: string) => {
    if (!currentQuestion || (isAnswered && !isExamMode)) return;

    const isCorrect = choice === currentQuestion.correctAnswer;
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: choice }));
    onRecordAnswer(currentQuestion.id, choice, isCorrect);

    if (!isExamMode) {
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
      setShowExplanation(userAnswers[activeQuestions[currentIndex + 1]?.id] !== undefined && !isExamMode);
    } else {
      finishQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      setShowExplanation(userAnswers[activeQuestions[currentIndex - 1]?.id] !== undefined && !isExamMode);
    }
  };

  const finishQuiz = () => {
    setTimerActive(false);
    setQuizCompleted(true);

    // Calculate score
    const total = activeQuestions.length;
    const correct = activeQuestions.filter(q => userAnswers[q.id] === q.correctAnswer).length;

    onSaveQuizSession({
      score: correct,
      total,
      categoryFilter: selectedCategory,
      typeFilter: selectedType
    });

    // Confetti celebration if scored >= 70%
    if (total > 0 && correct / total >= 0.7) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isConfiguring || quizCompleted || !currentQuestion) return;

      if (currentQuestion.type === 'mcq') {
        if (e.key === 'a' || e.key === 'A' || e.key === '1') handleSelectAnswer('A');
        if (e.key === 'b' || e.key === 'B' || e.key === '2') handleSelectAnswer('B');
        if (e.key === 'c' || e.key === 'C' || e.key === '3') handleSelectAnswer('C');
        if (e.key === 'd' || e.key === 'D' || e.key === '4') handleSelectAnswer('D');
      } else {
        if (e.key === 't' || e.key === 'T' || e.key === '1') handleSelectAnswer('True');
        if (e.key === 'f' || e.key === 'F' || e.key === '2') handleSelectAnswer('False');
      }

      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        e.preventDefault();
        handleNext();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isConfiguring, quizCompleted, currentQuestion, isAnswered, isExamMode]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // ==========================================
  // VIEW: QUIZ CONFIGURATION / SETUP
  // ==========================================
  if (isConfiguring) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-5">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Configure Practice Quiz</h2>
            <p className="text-xs text-slate-500 mt-1">Customize question pool, study discipline, and feedback mode</p>
          </div>

          {/* Module Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700">Subject Module</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'border-blue-600 bg-blue-50/50 text-blue-900 ring-1 ring-blue-600 font-semibold'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>All 5 Curriculum Modules</span>
                  <span className="font-mono text-slate-500">120 Qs</span>
                </div>
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                    selectedCategory === cat.name
                      ? 'border-blue-600 bg-blue-50/50 text-blue-900 ring-1 ring-blue-600 font-semibold'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="truncate pr-2">{cat.name}</span>
                    <span className="font-mono text-slate-500 shrink-0">{cat.count} Qs</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Question Format */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700">Question Format</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'all', label: 'All Formats', count: '120' },
                { id: 'mcq', label: 'MCQs Only', count: '78' },
                { id: 'true_false', label: 'True / False', count: '42' }
              ].map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedType(item.id as any)}
                  className={`p-2.5 rounded-lg border text-xs text-center transition-all ${
                    selectedType === item.id
                      ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold ring-1 ring-blue-600'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div>{item.label}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">{item.count} items</div>
                </button>
              ))}
            </div>
          </div>

          {/* Question Count */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700">Number of Questions</label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { count: 10, label: '10 Questions' },
                { count: 25, label: '25 Questions' },
                { count: 50, label: '50 Questions' },
                { count: -1, label: 'Full Pool' }
              ].map(item => (
                <button
                  key={item.count}
                  type="button"
                  onClick={() => setQuestionCount(item.count)}
                  className={`py-2 px-3 rounded-lg border text-xs text-center transition-all ${
                    questionCount === item.count
                      ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-semibold ring-1 ring-blue-600'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Mode */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700">Learning Mode</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsExamMode(false)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  !isExamMode
                    ? 'border-blue-600 bg-blue-50/50 text-blue-900 ring-1 ring-blue-600'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="text-xs font-bold">Interactive Practice Mode</div>
                <div className="text-[11px] text-slate-500 mt-1">Instant answer validation & full clinical rationale after each question</div>
              </button>

              <button
                type="button"
                onClick={() => setIsExamMode(true)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isExamMode
                    ? 'border-blue-600 bg-blue-50/50 text-blue-900 ring-1 ring-blue-600'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="text-xs font-bold">Exam Simulation Mode</div>
                <div className="text-[11px] text-slate-500 mt-1">Answers and explanations hidden until full test completion</div>
              </button>
            </div>
          </div>

          {/* Launch Buttons */}
          <div className="pt-4 flex items-center justify-between border-t border-slate-100">
            <button
              onClick={onExit}
              className="text-xs text-slate-600 hover:text-slate-900 font-medium cursor-pointer"
            >
              Cancel & Return
            </button>

            <button
              onClick={() => startQuiz()}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
            >
              Start Quiz Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW: QUIZ COMPLETED / RESULTS SCREEN
  // ==========================================
  if (quizCompleted) {
    const total = activeQuestions.length;
    const correctCount = activeQuestions.filter(q => userAnswers[q.id] === q.correctAnswer).length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const missedQuestions = activeQuestions.filter(q => userAnswers[q.id] !== q.correctAnswer);

    return (
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-8">
          
          <div className="text-center space-y-3 pb-6 border-b border-slate-100">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mx-auto">
              <Award className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Quiz Complete!</h2>
            
            <div className="text-4xl font-extrabold font-mono text-slate-900 tabular-nums">
              {percentage}%
            </div>

            <p className="text-xs text-slate-500">
              You scored <span className="font-semibold text-slate-800">{correctCount}</span> out of{' '}
              <span className="font-semibold text-slate-800">{total}</span> questions in{' '}
              <span className="font-mono font-semibold text-slate-800">{formatTime(secondsElapsed)}</span>
            </p>

            <div className="pt-2">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  percentage >= 80
                    ? 'bg-emerald-100 text-emerald-800'
                    : percentage >= 60
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-rose-100 text-rose-800'
                }`}
              >
                {percentage >= 80 ? 'Mastery Achieved' : percentage >= 60 ? 'Competent - Review Recommended' : 'Needs Reinforcement'}
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => startQuiz()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry This Quiz</span>
            </button>

            {missedQuestions.length > 0 && (
              <button
                onClick={() => startQuiz(missedQuestions)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold rounded-xl transition-all cursor-pointer"
              >
                <span>Drill {missedQuestions.length} Missed Only</span>
              </button>
            )}

            <button
              onClick={onExit}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all cursor-pointer"
            >
              <span>Back to Dashboard</span>
            </button>
          </div>

          {/* Missed Questions Review List */}
          {missedQuestions.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">
                Review Missed Questions ({missedQuestions.length})
              </h3>

              <div className="space-y-3">
                {missedQuestions.map((q, idx) => (
                  <div key={q.id} className="p-4 rounded-xl border border-rose-200 bg-rose-50/30 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-xs font-bold text-slate-900">
                        {idx + 1}. {q.question}
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">{q.category}</span>
                    </div>

                    <div className="text-xs space-y-1">
                      <div className="text-rose-700 font-medium">
                        Your answer: <span className="font-bold">{userAnswers[q.id] || 'Not answered'}</span>
                      </div>
                      <div className="text-emerald-700 font-medium">
                        Correct answer: <span className="font-bold">{q.correctAnswer}</span>
                        {q.options && (
                          <span className="ml-1 text-slate-700">
                            - {q.options.find(o => o.label === q.correctAnswer)?.text}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/60 leading-relaxed">
                      <span className="font-semibold text-slate-800">Explanation: </span>
                      {q.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW: ACTIVE QUIZ IN PROGRESS
  // ==========================================
  if (!currentQuestion) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      
      {/* Quiz Top Bar Status */}
      <div className="bg-white rounded-xl border border-slate-200 px-5 py-3 shadow-xs flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (window.confirm('Do you want to exit the current quiz? Progress will be saved.')) {
                onExit();
              }
            }}
            className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Quit</span>
          </button>

          <span className="text-slate-300">|</span>

          <span className="text-xs font-bold text-slate-900">
            Question <span className="font-mono tabular-nums">{currentIndex + 1}</span> of{' '}
            <span className="font-mono tabular-nums">{activeQuestions.length}</span>
          </span>
        </div>

        {/* Stopwatch & Bookmark */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-mono tabular-nums">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{formatTime(secondsElapsed)}</span>
          </div>

          <button
            onClick={() => onToggleBookmark(currentQuestion.id)}
            title={isBookmarked(currentQuestion.id) ? 'Remove from bookmarks' : 'Bookmark this question'}
            className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
              isBookmarked(currentQuestion.id)
                ? 'bg-amber-50 border-amber-200 text-amber-600'
                : 'border-slate-200 text-slate-400 hover:text-slate-600'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked(currentQuestion.id) ? 'fill-amber-500 text-amber-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
        <div
          className="bg-blue-600 h-1.5 transition-all duration-300 ease-out"
          style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
        />
      </div>

      {/* Primary Question Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
        
        {/* Module Header & Metadata */}
        <div className="flex items-center justify-between gap-3 text-xs text-slate-500 border-b border-slate-100 pb-3">
          <span className="font-semibold text-blue-700">{currentQuestion.category}</span>
          <div className="flex items-center gap-2">
            <span>{currentQuestion.type === 'mcq' ? 'Multiple Choice' : 'True / False'}</span>
            <span aria-hidden="true">·</span>
            <span>Ref #{currentQuestion.sectionNumber}</span>
          </div>
        </div>

        {/* Question Statement */}
        <div className="space-y-2">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
            {currentQuestion.question}
          </h2>
          {currentQuestion.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
              {currentQuestion.tags.map((tag, i) => (
                <span key={tag}>
                  {tag}
                  {i < currentQuestion.tags.length - 1 && <span className="ml-2 text-slate-300">·</span>}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Options Selection */}
        {currentQuestion.type === 'mcq' && currentQuestion.options ? (
          <div className="space-y-2.5 pt-2">
            {currentQuestion.options.map(option => {
              const isSelected = currentSelected === option.label;
              const isCorrectAnswer = option.label === currentQuestion.correctAnswer;
              
              // In practice mode, color code after answer
              let buttonStyle = 'border-slate-200 hover:border-blue-300 hover:bg-slate-50/50 text-slate-800';
              let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';

              if (isAnswered && !isExamMode) {
                if (isCorrectAnswer) {
                  buttonStyle = 'border-emerald-500 bg-emerald-50/60 text-emerald-950 ring-1 ring-emerald-500';
                  badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
                } else if (isSelected) {
                  buttonStyle = 'border-rose-400 bg-rose-50/60 text-rose-950 ring-1 ring-rose-400';
                  badgeStyle = 'bg-rose-600 text-white border-rose-600';
                } else {
                  buttonStyle = 'border-slate-200 opacity-60 text-slate-500';
                }
              } else if (isSelected) {
                buttonStyle = 'border-blue-600 bg-blue-50 text-blue-950 ring-1 ring-blue-600 font-medium';
                badgeStyle = 'bg-blue-600 text-white border-blue-600';
              }

              return (
                <button
                  key={option.label}
                  onClick={() => handleSelectAnswer(option.label)}
                  disabled={isAnswered && !isExamMode}
                  className={`w-full p-3.5 text-left rounded-xl border text-sm transition-all flex items-start gap-3.5 cursor-pointer disabled:cursor-default ${buttonStyle}`}
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 border ${badgeStyle}`}>
                    {option.label}
                  </span>
                  <span className="flex-1 pt-0.5 leading-relaxed font-normal">{option.text}</span>
                  
                  {isAnswered && !isExamMode && isCorrectAnswer && (
                    <span className="text-xs font-bold text-emerald-700 shrink-0 self-center flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      <span>Correct</span>
                    </span>
                  )}

                  {isAnswered && !isExamMode && isSelected && !isCorrectAnswer && (
                    <span className="text-xs font-bold text-rose-600 shrink-0 self-center flex items-center gap-1">
                      <X className="w-4 h-4" />
                      <span>Incorrect</span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          /* True / False Selection */
          <div className="grid grid-cols-2 gap-4 pt-2">
            {(['True', 'False'] as const).map(option => {
              const isSelected = currentSelected === option;
              const isCorrectAnswer = option === currentQuestion.correctAnswer;

              let buttonStyle = 'border-slate-200 hover:border-blue-300 hover:bg-slate-50 text-slate-800';

              if (isAnswered && !isExamMode) {
                if (isCorrectAnswer) {
                  buttonStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500 font-bold';
                } else if (isSelected) {
                  buttonStyle = 'border-rose-400 bg-rose-50 text-rose-900 ring-1 ring-rose-400 font-bold';
                } else {
                  buttonStyle = 'border-slate-200 opacity-60 text-slate-500';
                }
              } else if (isSelected) {
                buttonStyle = 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-600 font-bold';
              }

              return (
                <button
                  key={option}
                  onClick={() => handleSelectAnswer(option)}
                  disabled={isAnswered && !isExamMode}
                  className={`py-6 px-4 rounded-xl border text-center text-base transition-all cursor-pointer disabled:cursor-default ${buttonStyle}`}
                >
                  <div className="font-bold">{option}</div>
                  {isAnswered && !isExamMode && (
                    <div className="text-xs mt-1">
                      {isCorrectAnswer ? '✓ Correct' : isSelected ? '✗ Incorrect' : ''}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Immediate Explanation Box in Practice Mode */}
        {showExplanation && (
          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>Clinical & Scientific Takeaway</span>
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                Key Answer: {currentQuestion.correctAnswer}
              </span>
            </div>

            <p className="text-slate-700 leading-relaxed">
              {currentQuestion.explanation}
            </p>

            <div className="pt-1.5 text-slate-500 border-t border-slate-200/60 font-medium">
              <span className="text-slate-700 font-semibold">Core Concept: </span>
              {currentQuestion.keyFact}
            </div>
          </div>
        )}

        {/* Footer Navigation Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center gap-1"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-2">
            {currentIndex === activeQuestions.length - 1 ? (
              <button
                onClick={finishQuiz}
                disabled={!isAnswered && !isExamMode}
                className="px-6 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all cursor-pointer"
              >
                Finish & View Results
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all cursor-pointer flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Question Jumper Grid */}
      <div className="bg-white rounded-xl border border-slate-200/80 p-4 shadow-xs">
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="font-semibold text-slate-700">Question Navigator</span>
          <span className="text-slate-400 font-mono">
            {Object.keys(userAnswers).length} / {activeQuestions.length} Answered
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1">
          {activeQuestions.map((q, idx) => {
            const hasAnswer = userAnswers[q.id] !== undefined;
            const isCorrect = userAnswers[q.id] === q.correctAnswer;
            const isCurrent = idx === currentIndex;

            let badgeColor = 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200';
            if (isCurrent) {
              badgeColor = 'ring-2 ring-blue-600 font-bold bg-blue-100 text-blue-900 border-blue-400';
            } else if (hasAnswer) {
              if (isExamMode) {
                badgeColor = 'bg-blue-600 text-white border-blue-600';
              } else if (isCorrect) {
                badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
              } else {
                badgeColor = 'bg-rose-100 text-rose-800 border-rose-300';
              }
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setShowExplanation(userAnswers[q.id] !== undefined && !isExamMode);
                }}
                className={`w-7 h-7 rounded text-xs font-mono font-medium border flex items-center justify-center transition-all cursor-pointer ${badgeColor}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
