/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewMode, Category } from './types/quiz';
import { useStudyStore } from './hooks/useStudyStore';
import { Navbar } from './components/Navbar';
import { DashboardView } from './components/DashboardView';
import { QuizEngine } from './components/QuizEngine';
import { FlashcardsView } from './components/FlashcardsView';
import { StudyBankView } from './components/StudyBankView';
import { AnalyticsView } from './components/AnalyticsView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');
  
  // Custom launch parameters for Quiz and Flashcards
  const [quizOptions, setQuizOptions] = useState<{
    category?: Category;
    count?: number;
    onlyMissed?: boolean;
    onlyBookmarked?: boolean;
  } | null>(null);

  const [activeCategoryFilter, setActiveCategoryFilter] = useState<Category | undefined>(undefined);

  const {
    store,
    recordAnswer,
    toggleBookmark,
    isBookmarked,
    saveQuizSession,
    resetAllProgress,
    stats
  } = useStudyStore();

  const handleStartQuiz = (options?: {
    category?: Category;
    count?: number;
    onlyMissed?: boolean;
    onlyBookmarked?: boolean;
  }) => {
    setQuizOptions(options || {});
    setCurrentView('quiz');
  };

  const handleOpenFlashcards = (category?: Category) => {
    setActiveCategoryFilter(category);
    setCurrentView('flashcards');
  };

  const handleOpenBrowser = (category?: Category) => {
    setActiveCategoryFilter(category);
    setCurrentView('browser');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 relative">
      
      {/* Ambient Scientific Background Wallpaper with Scrim */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src="/src/assets/images/medical_science_background_1793086606963.jpg"
          alt="Medical Laboratory Background"
          className="w-full h-full object-cover object-center opacity-[0.08] filter saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50/80 to-slate-50" />
      </div>

      {/* Universal Top Bar */}
      <Navbar
        currentView={currentView}
        onSelectView={view => {
          if (view === 'quiz') {
            setQuizOptions(null);
          }
          setCurrentView(view);
        }}
        onQuickStartQuiz={() => handleStartQuiz({ count: 25 })}
        bookmarkedCount={stats.bookmarkedCount}
        overallAccuracy={stats.accuracy}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-16 relative z-10">
        {currentView === 'dashboard' && (
          <DashboardView
            stats={stats}
            onStartQuiz={handleStartQuiz}
            onOpenFlashcards={handleOpenFlashcards}
            onOpenBrowser={handleOpenBrowser}
            onResetProgress={resetAllProgress}
          />
        )}

        {currentView === 'quiz' && (
          <QuizEngine
            key={JSON.stringify(quizOptions || {})}
            initialCategory={quizOptions?.category}
            initialCount={quizOptions?.count}
            onlyMissed={quizOptions?.onlyMissed}
            onlyBookmarked={quizOptions?.onlyBookmarked}
            missedIds={stats.missedIds}
            bookmarkedIds={store.bookmarks}
            isBookmarked={isBookmarked}
            onToggleBookmark={toggleBookmark}
            onRecordAnswer={recordAnswer}
            onSaveQuizSession={saveQuizSession}
            onExit={() => setCurrentView('dashboard')}
          />
        )}

        {currentView === 'flashcards' && (
          <FlashcardsView
            initialCategory={activeCategoryFilter}
            isBookmarked={isBookmarked}
            onToggleBookmark={toggleBookmark}
            onExit={() => setCurrentView('dashboard')}
          />
        )}

        {currentView === 'browser' && (
          <StudyBankView
            initialCategory={activeCategoryFilter}
            userAnswers={store.answers}
            isBookmarked={isBookmarked}
            onToggleBookmark={toggleBookmark}
          />
        )}

        {currentView === 'analytics' && (
          <AnalyticsView
            stats={stats}
            quizHistory={store.quizHistory}
            onStartQuiz={handleStartQuiz}
            onResetProgress={resetAllProgress}
          />
        )}
      </main>

      {/* Grounded Academic Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-semibold text-slate-700">Medical Environmental Health & Parasitology</span>
            <span aria-hidden="true" className="mx-2 text-slate-300">·</span>
            <span>Comprehensive University Study Guide (120 Practice Questions)</span>
          </div>
          <div className="text-slate-400">
            Covers Ventilation, Solid Waste, Potable Water Standards, Foodborne Pathogens, Noise Ergonomics, Radiation ARS & Arthropod Vectors
          </div>
        </div>
      </footer>

    </div>
  );
}
