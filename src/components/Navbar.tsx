/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ViewMode } from '../types/quiz';
import { Bookmark, Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  onQuickStartQuiz: () => void;
  bookmarkedCount: number;
  overallAccuracy: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onSelectView,
  onQuickStartQuiz,
  bookmarkedCount,
  overallAccuracy
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <button
          onClick={() => onSelectView('dashboard')}
          className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
        >
          <div className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
              MP
            </span>
            <span>MedEnv Parasitology</span>
          </div>
        </button>

        {/* Zone 2: 4-5 Clean Nav Links (single-line, subtle hover, no pills) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <button
            onClick={() => onSelectView('dashboard')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentView === 'dashboard'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => onSelectView('quiz')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentView === 'quiz'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Practice Quiz
          </button>

          <button
            onClick={() => onSelectView('flashcards')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentView === 'flashcards'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Flashcards
          </button>

          <button
            onClick={() => onSelectView('browser')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentView === 'browser'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Study Bank
          </button>

          <button
            onClick={() => onSelectView('analytics')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentView === 'analytics'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            Analytics
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Quick Stats Indicator */}
        <div className="flex items-center gap-3 shrink-0">
          {bookmarkedCount > 0 && (
            <button
              onClick={() => onSelectView('browser')}
              title={`${bookmarkedCount} bookmarked questions`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200"
            >
              <Bookmark className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="font-mono tabular-nums">{bookmarkedCount}</span>
              <span>Saved</span>
            </button>
          )}

          <button
            onClick={onQuickStartQuiz}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Quiz</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="flex md:hidden border-t border-slate-100 px-4 py-2 bg-slate-50 overflow-x-auto gap-4 text-xs font-medium">
        <button
          onClick={() => onSelectView('dashboard')}
          className={`whitespace-nowrap px-2 py-1 rounded ${
            currentView === 'dashboard' ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-600'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => onSelectView('quiz')}
          className={`whitespace-nowrap px-2 py-1 rounded ${
            currentView === 'quiz' ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-600'
          }`}
        >
          Quiz
        </button>
        <button
          onClick={() => onSelectView('flashcards')}
          className={`whitespace-nowrap px-2 py-1 rounded ${
            currentView === 'flashcards' ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-600'
          }`}
        >
          Flashcards
        </button>
        <button
          onClick={() => onSelectView('browser')}
          className={`whitespace-nowrap px-2 py-1 rounded ${
            currentView === 'browser' ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-600'
          }`}
        >
          Study Bank (120)
        </button>
        <button
          onClick={() => onSelectView('analytics')}
          className={`whitespace-nowrap px-2 py-1 rounded ${
            currentView === 'analytics' ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-slate-600'
          }`}
        >
          Analytics
        </button>
      </div>
    </header>
  );
};
